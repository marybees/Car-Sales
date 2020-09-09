
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const removeFeature = feature => {
    console.log(feature)
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}