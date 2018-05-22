import React from 'react'
import { path } from 'ramda'
import ShowtimeService from '../lib/ShowtimeService'

const withImageSource = Component =>
  class ImageSource extends React.Component {
    state = {
      movieId: null,
      imageSource: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.movieId !== prevState.movieId) {
        return {
          movieId: nextProps.movieId,
          imageSource: null,
        }
      }
      return null
    }

    componentDidMount() {
      this._loadImageSource()
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.imageSource === null) {
        this._loadImageSource()
      }
    }

    _loadImageSource = async () => {
      const { movieId } = this.props
      let imageSource
      imageSource = localStorage.getItem(movieId)
      if (!imageSource) {
        const data = await ShowtimeService.getMovie(movieId)

        imageSource = path(['images', [0], 'url'])(data)
        localStorage.setItem(movieId, imageSource)
      }
      this.setState({ imageSource })
    }

    render() {
      if (this.state.imageSource === null) return null
      return <Component {...this.props} imageSource={this.state.imageSource} />
    }
  }

export default withImageSource
