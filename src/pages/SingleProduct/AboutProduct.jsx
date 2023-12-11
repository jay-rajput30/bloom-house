const AboutProduct = ({ text }) => {
  return (
    <div className="about-product">
      <h2>About the product</h2>
      <p className="about-product-description">{text}</p>
    </div>
  );
};

export default AboutProduct;
