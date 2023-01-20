import React from 'react'

const SavedVideoContext = React.createContext({
  save: false,
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
  updateSave: () => {},
})

export default SavedVideoContext
