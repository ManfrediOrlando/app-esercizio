import {createSlice} from "@reduxjs/toolkit"

export const usersState = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },

        remove: (state, action) => state.filter(user => user.id !== action.payload),

        edit: (state, action) => {
            return state.map(user => {
                if(user.id === action.payload.id){
                    return {...user, ...action.payload.data}
            }
                return user
            })
            // const {id, data} = action.payload
            // const user = state.find(u => u.id === id)

            // for (let key in data) {
            //     user[key] = data[key]
            // }
        },
        clear: (state, action) => [],
      

    }
})