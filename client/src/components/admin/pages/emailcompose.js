import React from 'react';
import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Link } from 'react-router-dom'

import Navbar from '../partials/topnavbar'
import Footer from '../partials/footer'
import InboxLeftBar from '../partials/emailSideBar'

class EditorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }
 
    onEditorStateChange: Function = (editorState) => {
        // console.log(editorState)
        this.setState({
          editorState,
        });
      };
      
    render() {

        const { editorState } = this.state;
        
        function uploadImageCallBack(file) {
            return new Promise(
              (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID 08bb85e07f6e674');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                  const response = JSON.parse(xhr.responseText);
                  console.log(response)
                  resolve(response);
                });
                xhr.addEventListener('error', () => {
                  const error = JSON.parse(xhr.responseText);
                  console.log(error)
                  reject(error);
                });
              }
            );
          }

        return (
            <div className='editor'>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: false } },
                    }}
                />
            </div>
        )
    }
}

const EmailCompose = () => {

    return (

        <div className="Dashobard">
            <div id="wrapper">
                <Navbar />
                <div className="content-page" id="content">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><Link to="/admin">PANDA / TA</Link></li>
                                                <li className="breadcrumb-item"><Link to="/admin/email/inbox">Email</Link></li>
                                                <li className="breadcrumb-item active">Compose</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Inbox</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                        <div className="inbox-leftbar">
                                            <InboxLeftBar />
                                        </div>
                                        <div className="inbox-rightbar">

                                            <div className="mt-5">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="To" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="CC" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Subject" />
                                                    </div>
                                                    <div className="form-group">
                                                        <EditorContainer />
                                                    </div>
                                                    <div className="form-group m-b-0">
                                                        <div className="text-right">
                                                            <button className="btn btn-yellow waves-effect waves-light px-4 mt-2">
                                                                <span>Send</span> <i className="mdi mdi-send ml-1" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default EmailCompose
