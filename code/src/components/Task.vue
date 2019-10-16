<template>
<md-card md-with-hover class="taskCard">
    <md-card-header>
        <md-field v-if="editable">
            <label>Название</label>
            <md-input v-model="value.title" md-counter="30"></md-input>
        </md-field>
        <template v-else>
            <div class="md-title">{{ value.title }}</div>
            <div class="md-subhead">
                <span v-if="value.status === 1">завершено</span>
                <span v-else-if="value.status === 0 && value.date > Date.now()">в работе до {{new Date(value.date).toLocaleDateString()}}</span>
                <span v-else>просрочено от {{new Date(value.date).toLocaleDateString()}}</span>
            </div>
        </template>
    </md-card-header>

    <md-card-content>
        <md-field v-if="editable">
            <label>Задача</label>
            <md-textarea v-model="value.body" md-counter="2048"></md-textarea>
        </md-field>
        <div v-else class="taskBody">
            {{ value.body }}
        </div>
    </md-card-content>

    <md-card-content>
        <md-datepicker v-if="editable" v-model="value.date" :md-model-type="Number" />
        <template v-if="editable">
            <md-chips v-model="value.tags" md-placeholder="добавить тэг..."></md-chips>
        </template>
        <template v-else>
            <md-chip v-for="tag of value.tags">{{tag}}</md-chip>
        </template>
    </md-card-content>

    <md-card-actions>
        <md-button class="md-accent md-raised" v-if="editable" @click="close">Завершить</md-button>
        <md-button class="md-primary md-raised" v-if="editable" @click="save">Сохранить</md-button>
    </md-card-actions>
</md-card>
</template>

<script>
export default {
    name: 'Task',
    props: {
        value: {
            id: Number,
            title: String,
            body: String,
            tags: Array,
            date: Number,
            status: Number
        },
        editable: Boolean,
        creating: Boolean
    },
    methods: {
        save: function() {
            this.$emit('saveTask', this.value)
        },
        close: function() {
            this.value.status = 1;
        }
    }
}
</script>

<style>
.md-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30em;
    margin: 1.5em;
    vertical-align: top;
}

.md-chip {
    margin: 0.3em;
}

.md-card-content {
    flex: 1;
}

.taskBody {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
