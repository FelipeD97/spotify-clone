export const initialState = { 
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQCFjbzmh25hw1prvp6GQ2nEnsufWG6hsEMD4buVS54H2hbNtM-cASQ8Fa_5vVGSzT9-sDusrHeGWBMfyhyM4WWOtsTnYPoyKfcTKW_rYa2xbl6U_0LbikEXiUI8p5fHQjdCj0G3ZvH-LJBJnKZ8rg7zlRPw6NpN8r9PRRo",
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            };
        default:
            return state;
    }
}

export default reducer;