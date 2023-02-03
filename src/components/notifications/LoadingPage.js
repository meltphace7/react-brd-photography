import React from 'react'
import classes from './LoadingPage.module.css'
import Modal from '../modal/Modal'
import LoadingSpinner from '../UI/LoadingSpinner'

const LoadingPage = () => {
    return (
      <Modal>
        <div className={classes["loading-spinner"]}>
          <LoadingSpinner />
        </div>
      </Modal>
    );
}

export default LoadingPage
