import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Plus, Dash, Cart4 } from "react-bootstrap-icons";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Category = () => {
  const navigate = useNavigate();
  const initialQuantitiesPopuler = new Array(6).fill(0);
  const initialQuantitiesVitaminC = new Array(6).fill(0);
  const initialQuantitiesObatBatuk = new Array(6).fill(0);

  const [quantitiesPopuler, setQuantitiesPopuler] = useState(initialQuantitiesPopuler);
  const [totalQuantityPopuler, setTotalQuantityPopuler] = useState(0);
  const [totalPricePopuler, setTotalPricePopuler] = useState(0);

  const [quantitiesVitaminC, setQuantitiesVitaminC] = useState(initialQuantitiesVitaminC);
  const [totalQuantityVitaminC, setTotalQuantityVitaminC] = useState(0);
  const [totalPriceVitaminC, setTotalPriceVitaminC] = useState(0);

  const [quantitiesObatBatuk, setQuantitiesObatBatuk] = useState(initialQuantitiesObatBatuk);
  const [totalQuantityObatBatuk, setTotalQuantityObatBatuk] = useState(0);
  const [totalPriceObatBatuk, setTotalPriceObatBatuk] = useState(0);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  const productsPopuler = [
    {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
  ];

  const productsVitaminC = [
    {
      image: "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660122001_60f7f5ba1ef1133130010a40",
      title: "Sido Muncul Vitamin C 1000 Mg Sweet Orange 6 Sachet",
      description: "/Strip",
      price: 5000,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
  ];

  const productsObatBatuk = [
    {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
  ];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleAddToCart = (index, category) => {
    let product;
    if (category === 'populer') {
      product = productsPopuler[index];
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityPopuler(totalQuantityPopuler + 1);
        setTotalPricePopuler(totalPricePopuler + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    } else if (category === 'vitaminC') {
      product = productsVitaminC[index];
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityVitaminC(totalQuantityVitaminC + 1);
        setTotalPriceVitaminC(totalPriceVitaminC + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    } else if (category === 'obatBatuk') {
      product = productsObatBatuk[index];
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityObatBatuk(totalQuantityObatBatuk + 1);
        setTotalPriceObatBatuk(totalPriceObatBatuk + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    }

    const existingCartItem = cart.find(item => item.product.title === product.title);
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index, category) => {
    let product;
    if (category === 'populer') {
      product = productsPopuler[index];
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityPopuler(totalQuantityPopuler - 1);
          setTotalPricePopuler(totalPricePopuler - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    } else if (category === 'vitaminC') {
      product = productsVitaminC[index];
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityVitaminC(totalQuantityVitaminC - 1);
          setTotalPriceVitaminC(totalPriceVitaminC - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    } else if (category === 'obatBatuk') {
      product = productsObatBatuk[index];
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityObatBatuk(totalQuantityObatBatuk - 1);
          setTotalPriceObatBatuk(totalPriceObatBatuk - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    }

    const existingCartItem = cart.find(item => item.product.title === product.title);
    if (existingCartItem && existingCartItem.quantity > 1) {
      existingCartItem.quantity -= 1;
    } else {
      setCart(cart.filter(item => item.product.title !== product.title));
    }
  };

  return (
    <>
      <Header />
      <Container className="shop">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/category" }}>Kategori</Breadcrumb.Item>
          <Breadcrumb.Item active>Vitamin C</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <Container className="product-container">
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Produk Populer</h5>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                className="see-all-button"
                as={Link}
                to="/Vitamin"
              >
                See All
              </Button>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {productsPopuler.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <Card className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description">
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price">
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesPopuler[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, 'populer')}
                        >
                          Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() => handleRemoveFromCart(index, 'populer')}
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesPopuler[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, 'populer')}
                          >
                            <Plus />
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="cart-icon" onClick={handleCheckout}>
      <Cart4 size={50} />
      {totalQuantity > 0 && (
        <>
          <span className="cart-count">{totalQuantity}</span>
          <span className="cart-price">{formatRupiah(totalPrice)}</span>
        </>
      )}
    </div>

      <Footer />
    </>
  );
};

export default Category;