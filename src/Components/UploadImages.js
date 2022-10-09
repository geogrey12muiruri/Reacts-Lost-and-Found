import React, { useState } from "react";
 
const UploadImages = () => {

    const [file, setFile] = useState(null); //stores the file in state initialized to null
    const types = ['image/png', 'image/jpeg'] // we define types so as to we can only upload an image and not a document or any other filetype.
    const [error, setError] = useState(null) //initial value to begin with we don't select any value
   
    const changeHandler = (e) => { //listens to when a user selects am image
        console.log('changed') //test control save and view the console to make sure our event handler is reached.
        let selected = e.target.files[0] //helps us to access the file which the user selected in this case the first file at index [0]
        console.log(selected)// save and view the console to see  the selected files with properties.
//then we set a state for the selected value and set it's initial value to null...




        if(selected && types.includes(selected.types)) { //truthy if a file has been selected by the user. remember we get the file as an object with one of it's property as type.
                                                         //to make sure the type of file we want to upload is an image we use the type attribute
            setFile(selected);
            setError(''); // the right file type is selected don't throw any errors                                //the (.include ()) is a method used to authenticate or compare the uploaded file it should include the types that we defined on top
        } else {
            setFile(null)//reset everything
            setError('Please select an image (png or jpeg)');

            

        }
    }

    return(

        
        <form>
        <h3>Item Description</h3>
        <div className="mb-3">
          <label>Enter Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-3">
          <label>Your Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="enter Phone number"
          />
        </div>
        <input type= "file" onChange={changeHandler } />
        <div className="output">
        {error && <div className="error">{ error}</div>}
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </div>
        
        </form>
    )
}
export default UploadImages;

//setup firebase later for my file storage.