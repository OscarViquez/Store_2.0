CREATE DATABASE online_store;
USE online_store;

CREATE TABLE product(
	product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(product_id),
    desc_card_simple VARCHAR(225) NOT NULL,
    desc_card_complete VARCHAR(225) NOT NULL,
    brand VARCHAR(225) NOT NULL,
    category VARCHAR(225) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_sm VARCHAR(255),
    image_md VARCHAR(255),
    image_lg VARCHAR(255),
    rating VARCHAR(255)
);

INSERT INTO
    product(
        name,
        desc_card_simple,
        desc_card_complete,
        brand,
        category,
        price,
        image_sm,
        image_md,
        image_lg,
        rating
    )
VALUES (
        'Guava Sao Paulo',
        'La Croix | Naturally Essenced',
        'Savor the sweet tropical delicacy and vibrant essence that satisfies your Constant Cravings !!',
        'La Croix',
        'Fruits',
        8.99,
        'https://ohv-store-v2.netlify.app/images/sm-product-laCriox-Guava-Sao.png',
        'https://ohv-store-v2.netlify.app/images/md-product-la-criox-guava.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-la-croix-guava.png',
        '5/5'
    ), (
        'Orange Cream',
        'Olipop | Sparkling Tonic',
        'Creamy, vanilla goodness and a bright pop of tangerine and mandarin citrus join forces to bring back this iconic childhood treat.',
        'Olipop',
        'Fruits',
        4.29,
        'https://ohv-store-v2.netlify.app/images/sm-product-olipop-orange-cream.png',
        'https://ohv-store-v2.netlify.app/images/md-product-olipop-orange-cream.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-olipop-orange-cream.png',
        '5/5'
    ), (
        'Tropical Punch',
        'Olipop | Sparkling Tonic',
        'Like a vacation for your tastebuds, Tropical Punch perfectly balances pineapple, passion fruit, mandarine, and apple juices for a crisp, juicy and nostalgic flavor reminiscent of your favorite childhood fruit punch.',
        'Olipop',
        'Fruits',
        4.29,
        'https://ohv-store-v2.netlify.app/images/sm-product-olipop-tropical-punch.png',
        'https://ohv-store-v2.netlify.app/images/md-product-olipop-tropical-punch.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-olipop-tropical-punch.png',
        '5/5'
    ), (
        'Banana Cream',
        'Olipop | A New Kind of Soda',
        'Never thought you see us make a banana cream soda? Candidly, neither did we. But, inspired by the mischievous and joyous energy of the Minions, we felt emboldened to play with the idea!',
        'Olipop',
        'Fruits',
        4.29,
        'https://ohv-store-v2.netlify.app/images/sm-product-olipop-banana-cream.png',
        'https://ohv-store-v2.netlify.app/images/md-product-olipop-banana-cream.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-olipop-banana-cream.png',
        '5/5'
    ), (
        'Matcha Latte',
        'Taika | Matcha Perfected',
        'A deliciously creamy matcha made in heaven, canned in space and ready for you to drink, right here on planet Earth. Hours of creativity in a can.',
        'Taika',
        'Coffee',
        3.59,
        'https://ohv-store-v2.netlify.app/images/sm-product-taika-matcha-latte.png',
        'https://ohv-store-v2.netlify.app/images/md-product-taika-matcha-latte.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-taika-product-matcha-latte.png',
        '5/5'
    ), (
        'Macadamia Latte',
        'Taika | Latte Perfected',
        'The word macadamia is dangerously close to the word macarena, but we are here for it. This latte tastes like coffee ice cream but with zero sugar.',
        'Taika',
        'Coffee',
        3.49,
        'https://ohv-store-v2.netlify.app/images/sm-product-taika-maca-latte.png',
        'https://ohv-store-v2.netlify.app/images/md-product-taika-maca-latte.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-taika-maca-latte.png',
        '5/5'
    ), (
        'Black Coffee',
        'Taika | Coffee Perfected',
        'For many, coffee is meant to be black. No sugar, no milk, no frills. And that is just what we have done while delivering our Taika twist on a classic.',
        'Taika',
        'Coffee',
        3.29,
        'https://ohv-store-v2.netlify.app/images/sm-product-taika-black-coffee.png',
        'https://ohv-store-v2.netlify.app/images/md-product-taika-black-coffee.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-taika-black-coffee.png',
        '5/5'
    ), (
        'Oat Milk Latte',
        'Taika | Coffee Perfected',
        'Oatmeal is boring. Our oat milk latte is not. Lightly sweet but without any added sugar, its smooth like a dolphin and delicious like cereal milk.',
        'Taika',
        'Coffee',
        3.69,
        'https://ohv-store-v2.netlify.app/images/sm-product-taika-oatmilk-latte.png',
        'https://ohv-store-v2.netlify.app/images/md-product-taika-oatmilk.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-taika-oatmilk-latte.png',
        '5/5'
    ), (
        'White Peach',
        'Calpico | Peach Perfect',
        'Oatmeal is boring. Our oat milk latte is not. Lightly sweet but without any added sugar, its smooth like a dolphin and delicious like cereal milk.',
        'Calpico',
        'Milky',
        3.69,
        'https://ohv-store-v2.netlify.app/images/sm-product-calpico-white-peach.png',
        'https://ohv-store-v2.netlify.app/images/md-product-calpico-white-peach.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-calpico-white-peach.png',
        '5/5'
    ), (
        'Calpico Mango',
        'Calpico | Amazing Mango Flavor',
        'Oatmeal is boring. Our oat milk latte is not. Lightly sweet but without any added sugar, its smooth like a dolphin and delicious like cereal milk.',
        'Calpico',
        'Milky',
        3.69,
        'https://ohv-store-v2.netlify.app/images/sm-product-calpico-mango.png',
        'https://ohv-store-v2.netlify.app/images/md-product-calpico-mango.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-calprico-mango.png',
        '5/5'
    ), (
        'Calpico Melon',
        'Calpico | Amazing Melon Flavor',
        'Oatmeal is boring. Our oat milk latte is not. Lightly sweet but without any added sugar, its smooth like a dolphin and delicious like cereal milk.',
        'Calpico',
        'Milky',
        3.69,
        'https://ohv-store-v2.netlify.app/images/sm-product-calpico-melon.png',
        'https://ohv-store-v2.netlify.app/images/md-product-calpico-melon.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-calpico-melon.png',
        '5/5'
    ), (
        'Calpico Strawberry',
        'Calpico | Strawberry Flavor',
        'Oatmeal is boring. Our oat milk latte is not. Lightly sweet but without any added sugar, its smooth like a dolphin and delicious like cereal milk.',
        'Calpico',
        'Milky',
        3.69,
        'https://ohv-store-v2.netlify.app/images/sm-product-calpico-strawberry.png',
        'https://ohv-store-v2.netlify.app/images/md-product-calpico-strawberry.png',
        'https://ohv-store-v2.netlify.app/images/lg-product-calpico-strawberry.png',
        '5/5'
    );

-- DROP DATABASE online_store; --

SELECT * FROM product;
SHOW TABLES;

SELECT * FROM product WHERE category='Coffee';
SHOW TABLES;

