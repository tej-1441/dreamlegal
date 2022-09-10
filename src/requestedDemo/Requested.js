import { useEffect, useState } from "react"
import fireDb from '../firebase';
import "./Requested.css";
function Requested() {

    const [data, setData] = useState({});

    useEffect(() => {
        console.log(fireDb.child("/requestdemo"));
        async function fetchdata(){
            await fireDb.child("requestdemo").on("value",(snapshot) => {
                console.log("snap",snapshot.val());
                if(snapshot.val() !== null)
                {
                    setData({...snapshot.val()});
                }
                else
                {
                    setData({});
                }
            });
        }
        // fetchdata();

        // return () => {
        //     setData({});
        // };
    },[]);
     console.log("data",data);
    return (
       <div className="requested__data"
       style={{padding:"10px",backgroundColor:"#2222"}}>
        {Object.keys(data).map((id,index) => {
            return(
                <div className="each_request">
                <div className="each__data">
                    {
                        data[id].name.enteredName
                    }
                </div>
                <div className="each__data">
                    {data[id].email.enteredEmail}
                </div>
                <div className="each__data">
                    {
                        data[id].message.enteredMessage
                    }
                </div>
                <div className="each__data">
                   {data[id].subject.enteredSubject}
                </div>
                <hr size="4" width="600"/>
                </div>

            )
        })}
          <div>thank you</div>
       </div>
    )
}

export default Requested