
const SignleCategory = ({ category }) => {
    const { id, logo, category_name, availability } = category;
    return (
        <div>
            <img src={logo} alt="" />
            <h3>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default SignleCategory;