import React from 'react';

import Faqs from './Faqs';

export default function InfoModal({showModal, setShowModal}) {
  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title text-capitalize">How does it work</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                </div>

                <div className="modal-body">
                    <Faqs />
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}
