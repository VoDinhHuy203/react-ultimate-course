import "./style.css";

const MyComponent = () => {
    const arr = [1, 2, 3];
    const obj = {
        name: "dinhhuy",
        age: 21,
    };

    return (
        <>
            <div> {JSON.stringify(obj)} & hoidanit & dinhhuy</div>
            <div className="child">child</div>
        </>
    );
};

export default MyComponent;
