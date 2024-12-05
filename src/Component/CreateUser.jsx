import Swal from 'sweetalert2'
import { NavLink } from "react-router";
import Nav from "./Nav";
import { MdOutlineArrowOutward } from "react-icons/md";
const CreateUser = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = new FormData(e.target);
        // const name = form.get('name')
        const name = e.target.name.value;
        const email = e.target.email.value;

        //* get gender data from radion button
        //* way-1
        const genderRadio = document.getElementsByName('gender')
        const checkedRadio = Array.from(genderRadio).find(data => data.checked);
        const gender_radionData = checkedRadio.value;
        console.log(gender_radionData);

        //* way-2
//         let data= '';
//         const genderSelect = document.getElementsByName('gender')
//         for(let a = 0; a < genderSelect.length; a++){
//             if(genderSelect[a].checked){
//                 data = genderSelect[a].value;
//             }
            
//         }
// console.log(data);

        //* get accout status from radion button
        const statusRadio = document.getElementsByName('status')
        let statusRadioData ='';
        for(let x = 0; x < statusRadio.length; x++){
            if(statusRadio[x].checked){
                statusRadioData = statusRadio[x].value;
            }
        }

        console.log(statusRadioData);
        const user_data = {name, email, gender_radionData, statusRadioData};
        console.log(user_data);

        //* send data to server

        fetch('http://localhost:8000/user', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user_data)

        })
        .then(res => res.json())
        .then(data => {console.log(data); if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }})
    }

    return (
        <>
        <div className="p-2 rounded-2xl backdrop-blur-2xl shadow-md">

            <NavLink to='/allUser'>
        <div className="flex items-center ">
        <MdOutlineArrowOutward />
        <Nav btnName='All user'/>
        </div>
            </NavLink>

        <div className="py-5">
            <div className="text-center">{/*text conatiner*/}
                <h2 className="font-semibold text-xl">New User</h2>
                <p>Use the bellow form to create a new account</p>
            </div>

  <div className="my-5">
      <form className="card-body" onSubmit={handleSubmit}>
          <label>
              <span className="font-semibold">Name</span>
          </label>
          <input name="name" type="text" placeholder="User Name" className="input input-bordered" required />

          <label>
              <span className="font-semibold">Email</span>
          </label>
          <input name="email" type="email" placeholder="Email" className="input input-bordered" required />


{/* Input Radion section one */}
          <div className="flex md:gap-4 gap-2"> 
              <label className="font-semibold">
                  <span>Gender</span>
              </label>

              <div className="flex items-baseline gap-2">
              <input name="gender" type="radio" id="male" value="Male"/>
              <label htmlFor="male">Male</label>
              </div>
              
              <div className="flex items-baseline gap-2">
              <input name="gender" type="radio" id="female" value="Female"/>
              <label htmlFor="female">Female</label>
              </div>
          </div>


{/* Input Radion section two */}
          <div className="flex md:gap-4 gap-2">

            <label className="font-semibold">
                <span>Status</span>
            </label>

            <div className="flex items-baseline gap-2">
                <input name="status" type="radio" id="active" value="active"/>
                <label htmlFor="active">Active</label>
            </div>

            <div className="flex items-baseline gap-2">
                <input name="status" type="radio" id="inactive" value="inactive"/>
                <label htmlFor="inactive">Inactive</label>
            </div>
          </div>

<button className="btn btn-outline mt-5">
          <input type="submit"/>
</button>
      </form>
  </div>
        </div>
        </div>

        </>
    );
};

export default CreateUser;