import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";
const UserCard = ({data, users, setUsers}) => {
    const {_id, name} = data;

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {



              fetch(`http://localhost:8000/user/${id}`, 
                {method: 'DELETE'}                
              )
              .then(res => res.json())
              .then(data => {console.log(data) 
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your data has been deleted.",
                        icon: "success"
                      })

                      const remainingUser = users.filter(data => data._id !== _id);
                      setUsers(remainingUser)
                    }
                    
                })
                
            }
        });
        console.log(id);
    }
    return (
        <>
 <div className="card glass bg-base-100 w-96 shadow-xl my-5">
  <div className="card-body">
    <div className="card-actions justify-end">

{/*delete button*/}
      <button
       onClick={()=>handleDelete(_id)}
       className="btn btn-square btn-sm bg-red-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

{/*update button*/}
<Link to={`/userEdit/${_id}`}>
      <button className="btn btn-square btn-sm">
      <BiEditAlt />
      </button>
</Link>


    </div>
    <p>{name}</p>
  </div>
</div>
        </>
    );
};

export default UserCard;