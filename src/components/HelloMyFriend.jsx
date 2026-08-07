const HelloMyFriend = (props) => {
    return (
        <div className="alert alert-warning display-6" role="alert">
            Antes: {props.Antes}   <br/>  Ahora:  {props.Ahora}
        </div>
    );
};

export default HelloMyFriend;