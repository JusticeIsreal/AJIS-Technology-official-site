import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
function ajismessagespagehidden() {
  const [msg, setMsg] = useState();
  useEffect(() => {
    const getMsg = async () => {
      axios
        .get("https://api-j.onrender.com/ajis/meaasge/getvistorsmsg")
        .then((resp) => {
          console.log(resp.data.data);
          setMsg(resp.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getMsg();
  }, []);

  return (
    <div>
      <Link href="/">
        {" "}
        <h1>Messages</h1>
      </Link>
      {msg?.map((sent) => (
        <div
          key={sent._id}
          style={{ margin: "10px", border: "2px solid gray" }}
        >
          <p>{sent.visitorname}</p>
          <p>{sent.visitoremail}</p>
          <p>{sent.visitorphonenumber}</p>
          <p>{sent.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ajismessagespagehidden;
