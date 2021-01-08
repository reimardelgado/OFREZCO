import Axios from "axios"
import AuthService from "../../services/AuthService"

const state = {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    userProfile: {
        id: null,
        identification: null,
        fullName: null,
        userName: null,
        email: null,
        password: null,
        country: null,
        city: null,
        address: null,
        phone: null,
        bussinesType: null,
        appMovil: false,
        accountType: null,
        CreatedTime: null,
        ModifiedTime: null
    },
    currentId: undefined,
}

const getters = {
    accessToken: state => {
        return state.accessToken
    },
    refreshToken: state => {
        return state.refreshToken
    },
    userProfile: state => {
        return state.userProfile
    },
    currentId: state => {
        return state.currentId
    }
}

const actions = {
    forgotPass(context, model) {
        let params = {
            email: model.email.toLowerCase()
        }
        var a = 'Bearer ' + model.token
        Axios.defaults.headers.common['Authorization'] = a
        return Axios.post('/authenticate/user/recover', params)
    },
    checkEmail(context, email) {
        let params = {
            email: email.toLowerCase()
        }
        var a = 'Bearer ' + localStorage.getItem('accessToken')
        Axios.defaults.headers.common['Authorization'] = a
        return Axios.post('/authenticate/user/check-email', params)
    },
    saveNewPass(context, model) {
        let params = {
            email: model.email.toLowerCase(),
            token: model.token,
            password: model.password
        }
        var a = 'Bearer ' + model.token
        Axios.defaults.headers.common['Authorization'] = a
        return Axios.post('/authenticate/user/recover/password', params)
    },
    login(context, model) {
        localStorage.clear()
        return AuthService.login(model.email, model.password)
            .then((result) => {
                console.log("f")
                if (result.data.error == 0) {
                    localStorage.setItem('accessToken', result.data.data.token)
                    localStorage.setItem('expirationTime', result.data.data.expiration)
                    AuthService.getProfile()
                        .then((result) => {
                            if (result.data.error == 0) {
                                context.commit('setUserProfile', {
                                    pro: result.data.data
                                })
                            }
                        })
                }
                return result
            })
            .catch(error => {
                return error
            })
    },
    getProfile(context) {
        return AuthService.getProfile()
            .then((result) => {
                if (result.data.error == 0) {
                    //sessionStorage.setItem('emailProfile', result.data.data.email)
                    context.commit('setUserProfile', {
                        pro: result.data.data
                    })
                }
            })            
    },
    logoutUser(context){
        localStorage.clear()
        context.commit('setUserProfile', {
            pro: undefined
        })
    }
}

const mutations = {
    setUserProfile(state, {
        pro
    }) {
        state.userProfile = pro
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}