<template>
<div id="app">
    <md-toolbar class="md-primary toolbar">
        <div class="md-title title">Мои дела</div>
        <md-button class="md-raised md-primary addTask" @click="showAddTask">Новая задача</md-button>
    </md-toolbar>

    <md-app>
        <md-app-drawer md-permanent="full">
            <md-subheader>Фильтры</md-subheader>

            <md-list>
                <md-list-item>
                    <md-subheader>Тэги</md-subheader>
                    <md-chips v-model="filters.tags" md-placeholder="добавить тэг..."></md-chips>
                </md-list-item>

                <md-divider></md-divider>
                <md-list-item>

                    <md-subheader>Статус</md-subheader>
                    <md-list>
                        <md-switch v-model="filters.status" :value="0">В работе</md-switch>
                        <md-switch v-model="filters.status" :value="1">Завершена</md-switch>
                        <md-switch v-model="filters.status" :value="-1">Просрочена</md-switch>
                    </md-list>
                </md-list-item>
            </md-list>
        </md-app-drawer>

        <md-app-content>
            <Task v-for="task of filteredTasks" :value="task" @click.native="showTask(task.id)"></Task>
        </md-app-content>
    </md-app>

    <md-dialog :md-active.sync="shown">
        <Task v-if="shows === -1" v-model="newTask" :editable="true" :creating="true" @saveTask="addTask"></Task>
        <Task v-else v-model="tasks[shows]" :editable="true" @saveTask="saveTask"></Task>
    </md-dialog>
</div>
</template>

<script>
import Task from './components/Task.vue'

const taskTemplate = {
    id: null,
    title: '',
    body: '',
    tags: [],
    date: null,
    status: 0
}


export default {
    name: 'app',
    components: {
        Task
    },
    data() {
        return {
            tasks: [],
            shows: -1,
            shown: false,
            filters: {
                tags: [],
                status: null
            },
            newTask: Object.assign({}, taskTemplate)
        }
    },
    computed: {
        filteredTasks: function() {
            return this.tasks.filter(task => {
                if (this.filters.tags.length > 0 && !task.tags.some(tag => this.filters.tags.includes(tag)))
                    return false

                if (this.filters.status !== null) {
                    if (this.filters.status === 0 && task.status === 0)
                        return task.date > Date.now()
                    else if (this.filters.status === -1)
                        return task.status === 0 && task.date < Date.now()
                    else
                        return this.filters.status === task.status
                }

                return true
            })
        }
    },
    methods: {
        showAddTask: function() {
            this.shown = true
        },
        showTask: function(i) {
            this.shown = true
            this.shows = i
        },
        saveTask: function(newTask) {
            this.$set(this.tasks, this.shows, newTask)
            this.shows = -1;
            this.shown = false;
        },
        addTask: function() {
            this.newTask.id = this.tasks.length
            this.tasks.push(this.newTask)
            this.shown = false;
            this.newTask = Object.assign({}, taskTemplate)
        }
    },
    watch: {
        tasks: function(tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    },
    mounted() {
        if (localStorage.getItem('tasks')) {
            try {
                this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } catch (e) {
                localStorage.removeItem('tasks');
            }
        }
    }
}
</script>

<style>
.toolbar .title {
    flex: 1;
}

.md-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
}

.md-content>.md-card {
    height: 20em;
}
</style>
