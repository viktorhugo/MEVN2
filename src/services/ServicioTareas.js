import Api from '@/services/Api'

export default {
    obtenerTareas() {
        return Api().get('tareas')
    }
}