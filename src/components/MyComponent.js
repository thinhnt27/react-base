import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       {
//         id: 1,
//         name: "Thinh",
//         age: 17,
//       },
//       {
//         id: 2,
//         name: "Ivor",
//         age: 25,
//       },
//     ],
//   };
//   handleAddNewUser = (user) => {
//     console.log("user", user);
//     this.setState({
//       listUser: [user, ...this.state.listUser],
//     });
//   };
//   handleDeleteUser = (id) => {
//     let listUserClone = [...this.state.listUser];
//     listUserClone = listUserClone.filter((user) => user.id !== id);
//     this.setState({
//       listUser: listUserClone,
//     });
//   };

//   //JSX
//   render() {
//     //DRY: do not repeat yourself
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfor
//             listUser={this.state.listUser}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

// const MyComponent = () => {
//   const [listUser, setListUser] = useState([
//     {
//       id: 1,
//       name: "Thinh",
//       age: 17,
//     },
//     {
//       id: 2,
//       name: "Ivor",
//       age: 25,
//     },
//   ]);
//   const handleAddNewUser = (user) => {
//     setListUser([user, ...listUser]);
//   };
//   const handleDeleteUser = (id) => {
//     let userListClone = [...listUser];
//     userListClone = userListClone.filter((user) => user.id !== id);
//     setListUser(userListClone);
//   };
//   return (
//     <>
//       <div className="a">
//         <AddUserInfor handleAddNewUser={handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
//       </div>
//       <div className="b"></div>
//     </>
//   );
// };
const MyComponent = () => {
  const [listUser, setListUser] = useState([
    {
      id: 1,
      name: "Thinh",
      age: 17,
    },
    {
      id: 2,
      name: "Ivor",
      age: 25,
    },
  ]);
  const handleAddNewUser = (user) => {
    setListUser([user, ...listUser]);
  };
  const handleDeleteUser = (id) => {
    let userListClone = [...listUser];
    userListClone = userListClone.filter((user) => user.id !== id);
    setListUser(userListClone);
  };
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
      </div>
      <div className="b"></div>
    </>
  );
};
export default MyComponent;
