import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

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
  return (
    <div className="display-infor-container">
      {true && (
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
