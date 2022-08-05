export const SET_LOADING = "details/SET_LOADING";
export const SET_ERROR = 'details/SET_ERROR'
export const SET_COUNTRY = 'details/SET_COUNTRY'
export const CLEAR_COUNTRY = "details/CLEAR_COUNTRY";
export const SET_NEIGHBORS = "details/SET_NEIGHBORS";

const setLoading = () => ({
    type: SET_LOADING,
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err
})

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

export const clearCountry = () => ({
    type: CLEAR_COUNTRY
})

export const setNeighbors = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries
})

export const loadingCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading())

    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err.message)))
}

export const loadingNeighborsByBorder = (borders) => (dispatch, _, {client, api}) => {
    client.get(api.filterByCode(borders))
        .then(({data}) => dispatch(setNeighbors(data.map((c) => c.name))))
        .catch(err => console.error(err))
}