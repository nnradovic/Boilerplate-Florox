
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { readApi, deleteApi, createApi, updateApi } from "../../api/testApi";
import { useForm } from "react-hook-form";
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import './TestStyle.scss'
library.add(faBars)

function TestComponent({ test }) {

  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const [isEdit, setIsEdit] = useState(false)
  const [iD, setID] = useState(null)



  const deletePipe = (id) => {
    deleteApi(dispatch, id)
      .then(res => {
        readApi(dispatch)
      })
  }

  const onSubmit = (values, e) => {
    createApi(dispatch, values)
      .then(res => {
        readApi(dispatch)
        e.target.reset();

      })
  }

  const onEditSave = (values, e) => {
    console.log(iD);
    updateApi(dispatch, values, iD)
      .then(res => {
        readApi(dispatch)
        setIsEdit(false)
      })
  }

  const editPipe = (id) => {
    setID(id)
    setIsEdit(true)

  }



  const list = (test) => {
    return (
      !!test.data ? test.data.resultData.map((t, key) => {
        return (<li key={key}><h5 >{t.title}</h5> <p >{t.text}</p><button onClick={() => deletePipe(t.id)}>Delete</button>
          <button onClick={() => editPipe(t.id)} >Edit</button>
          {isEdit && iD === t.id ? <form onSubmit={handleSubmit(onEditSave)}>
            <input
              className="form-control"
              placeholder="Diamter"
              name="text"
              defaultValue={!!t ? t.text : null}
              ref={register({
                required: "Required"
              })}
            />
            <input
              className="form-control"
              placeholder="Length"
              name="title"
              defaultValue={!!t ? t.title : null}
              ref={register({
                required: "Required"
              })}
            />
            <button color="primary" type="submit">

              Save
            </button>{" "}
          </form>
            : null}
        </li >
        )
      }) : null
    )
  }

  return (
    <Row >
      <Col md={{ span: 6, offset: 6 }} >
        <FontAwesomeIcon icon={faBars} />
      </Col>
      <Col md={{ span: 6, offset: 6 }} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Diamter
        <input
              className="form-control"
              placeholder=""
              name="text"
              defaultValue={null}
              ref={register({
                required: "Required"
              })}
            />
          </label><br />
          <label>
            Length
        <input
              className="form-control"
              placeholder=""
              name="title"
              defaultValue={null}
              ref={register({
                required: "Required"
              })}
            />
          </label><br />
          <button color="primary" type="submit">
            Post
        </button>{" "}

        </form>
      </Col >
      <Col md={6}>
        <ul>
          {list(test)}
        </ul>
      </Col>
    </Row >
  );
}

export default TestComponent;
