import { MdOutlineArrowOutward } from "react-icons/md";
import Nav from "./Nav";
import { NavLink, useLoaderData } from "react-router";
import UserCard from "./UserCard";
import { useState } from "react";


const AllUser = () => {
    const data = useLoaderData();
    const [users, setUsers] = useState(data);
    return (
        <>
        <div>

            <NavLink to='/'>
        <div className="flex items-center ">
        <MdOutlineArrowOutward />
        <Nav btnName='Create user'/>
        </div>
            </NavLink>

{
    data.map(user => <UserCard key={user._id} data={user} users={users} setUsers={setUsers}/>)

}

 
        </div>
        </>
    );
};

export default AllUser;