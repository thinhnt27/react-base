import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
// import logo from "../logo.svg";

//stateless component vs stateful component
// class DisplayInfor extends React.Component {
//   //Babel compiler

//   render() {
//     //destructuring array
//     const { listUser } = this.props; //object
//     console.log(listUser);
//     // const {listUser} = this.props.listUser;
//     //props => viết tắt properties

//     //template + logic js
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUser.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name: {user.name}</div>
//                     <div>My age: {user.age}</div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//         {/* <div>My name: {name}</div>
//         <div>My age: {age}</div> */}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser } = props; //object
  const [isShowHideListUsers, setShowHideListUsers] = useState(true); // [true, function
  //destructuring assignment
  const handleShowHideListUsers = () => {
    setShowHideListUsers(!isShowHideListUsers);
  };

  console.log("call me");
  useEffect(() => {
    setTimeout(() => {
      document.title = "Ivor's website";
    }, 3000);
    console.log("call me when component did mount");
  }, []); //[] là cho useEffect chạy 1 lần duy nhất khi component được render
  //[listUser] là cho useEffect chạy mỗi khi listUser thay đổi
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUsers()}>
          {isShowHideListUsers === true ? "Hide list user" : "Show list user"}
        </span>
      </div>
      {isShowHideListUsers && (
        <>
          {listUser.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div>My name: {user.name}</div>
                  <div>My age: {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
      {/* <div>My name: {name}</div>
        <div>My age: {age}</div> */}
    </div>
  );
};

export default DisplayInfor;
