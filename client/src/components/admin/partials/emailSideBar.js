import React from 'react'
import { Link } from 'react-router-dom'

const EmailSideBar = () => {

    return (
        <>
            <Link to="/admin/email/compose" className="btn btn-yellow btn-block waves-effect waves-light ribble">Compose</Link>
            <div className="mail-list mt-4">
                <Link to="/admin/email/inbox" className="text-yellow font-weight-bold font-14"><i className="dripicons-inbox mr-2"></i>Inbox<span className="badge badge-soft-yellow float-right ml-2">5</span></Link>
                <Link to="/admin/email/inbox" className="font-14"><i className="dripicons-exit mr-2"></i>Sent</Link>
                <Link to="/admin/email/inbox" className="font-14"><i className="dripicons-document mr-2"></i>Draft</Link>
                <Link to="/admin/email/inbox" className="font-14"><i className="dripicons-trash mr-2"></i>Trash</Link>
                <Link to="/admin/email/inbox" className="font-14"><i className="dripicons-tag mr-2"></i>Important<span className="badge font-13 float-right ml-2">2</span></Link>
                <Link to="/admin/email/inbox" className="font-14"><i className="dripicons-warning mr-2"></i>Spam</Link>
                <Link to="/admin/email/inbox" className="font-14"><i className="dripicons-star mr-2"></i>Starred</Link>
            </div>
            <h6 className="mt-4">Tags</h6>
            <div className="list-group b-0 mail-list">
                <label className="list-group-item border-0 font-14"><span className="mdi mdi-circle text-purple mr-2"></span>Sales</label>
                <label className="list-group-item border-0 font-14"><span className="mdi mdi-circle text-yellow mr-2"></span>Marketing</label>
                <label className="list-group-item border-0 font-14"><span className="mdi mdi-circle text-danger mr-2"></span>Design</label>
            </div>
        </>
    )
}

export default EmailSideBar
