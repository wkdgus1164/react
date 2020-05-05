import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native'

const ScrollContainer = ({ loading, children, contentContainerStyle, refreshFn }) => {
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = async () => {
        setRefreshing(true)
        await refreshFn()
        setRefreshing(false)
    }
    return (
        <ScrollView
            refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} tintColor={"white"} />}
            style={{ backgroundColor: 'black' }}
            contentContainerStyle={{ justifyContent: loading ? "center" : "flex-start", ...contentContainerStyle }}>
            {loading ? <ActivityIndicator color="white" size="small" /> : children}
        </ScrollView>
    )
}

ScrollContainer.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object,
    refreshFn: PropTypes.func
}

export default ScrollContainer