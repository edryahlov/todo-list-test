import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        notes: [
            {
                title: 'test name 1',
                text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                todos: [
                    {
                        status: false,
                        text: 'test text line 1',
                    },
                    {
                        status: false,
                        text: 'test text line 2',
                    },
                    {
                        status: false,
                        text: 'test text line 3',
                    },
                ],
            },
        ],
    },
    getters: {
        getNotes: state => state.notes,
    },
    mutations: {
        toggleTodo: (state, value) => {
            const [noteNum, todoNum] = value;
            return state.notes[noteNum].todos[todoNum].status = !state.notes[noteNum].todos[todoNum].status;
        },
        changeText: (state, value) => {
            const [noteIndex, where, text, todoIndex] = value;
            if (!todoIndex) {
                return state.notes[noteIndex][where] = text;
            } else {
                return state.notes[noteIndex]['todos'][todoIndex]['text'] = text;
            }
        },
        addTodoStore: (state, noteIndex) => state.notes[noteIndex].todos.push({status: false, text: 'new todo'}),
        addNote: (state) => state.notes.push({title: 'title', text: 'text', todos: [{status: false, text: 'new todo'}]}),
        deleteNote: (state, noteIndex) => state.notes.splice(noteIndex, 1),
    },
    actions: {
        toggleTodo ({commit}, val) {
            commit('toggleTodo', val)
        },
        changeText ({commit}, val) {
            commit('changeText', val)
        },
        addTodoStore ({commit}, val) {
            commit('addTodoStore', val)
        },
        addNote ({commit}) {
            commit('addNote')
        },
        deleteNote ({commit}, val) {
            commit('deleteNote', val)
        },
    },
    modules: {},
    plugins: [createPersistedState()],
})
