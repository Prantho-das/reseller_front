import CategoryCard from "@/components/cards/CategoryCard";
import ProductCard from "@/components/cards/ProductCard";
import BannerSection from "@/components/sections/BannerSection";
import TopSellingSection from "@/components/sections/TopSellingSection";

export default function Home() {
  return (
    <>
      <section>
        <div className="card rounded-0">
          <div className="row g-0">
            <div className="col-lg-2 d-lg-block d-none">
              <ul className="nav flex-column " id="nav_accordion">
                <li className="nav-item">
                  <a className="nav-link ">
                    <strong>
                      <div className="d-flex justify-content-between mb-1">
                        <span>Categories</span>
                      </div>
                    </strong>
                  </a>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link parent-link">
                    <img
                      src="https://backend.wholesaleclubltd.com/assets/img/placeholder.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    Bakery &amp; Restaurant
                  </a>
                  <ul className="submenu collapse">
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Bakery </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Savory </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Donut </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bread </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Biscuit &amp; Cookies </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bun </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Pastry &amp; Cake </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Pastry </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Restaurant (A La Carte){" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Set-Menu </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Vegetables </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pasta </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Curry </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Snacks </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Salad </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Starter </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soup </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link parent-link">
                    <img
                      src="https://backend.wholesaleclubltd.com/uploads/all/31dlYVIR1ty6B3c35zk7aR2FF1Ndwb4Ie0DPUfRq.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    Food &amp; Grocery
                  </a>
                  <ul className="submenu collapse">
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Cigarettes &amp; Tobacco{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Electric Cigarette </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Beverages </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Drinking Water </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Tea </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Juice </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Energy Drinks </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Coffee </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Drinking Chocolate Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Instant Powdered Drinks </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soft Drink </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sports Drinks </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Coffee Mate </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Liquid Coffee </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soda Water </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Cooking Essentials{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Salt </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sugar </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Flour </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dal or Lentil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Beans </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Rice </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Rice Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Loose Dal or Lentil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Jaggery or Gur </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Taal Misri </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Chickpeas (Chola) </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Corn </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Suji </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Spices &amp; Seasoning{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Powdered Spices </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Ready Masala </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Ready Mix </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Isabgol Husk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Whole Spices </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Basil Seed (Tokma) </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">China Grass </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cooking Paste </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Milk &amp; Dairy Products{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Powder Milk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Fresh Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Yogurt </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cheese </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">UHT Milk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Condensed Milk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Curd </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Butter </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Milkshake </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Margarine </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Liquid Milk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Snacks &amp; Chips{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Chanachur </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Snacks </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Papor </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soan Papdi </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nuts </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Chips </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dried Fruits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Puffed Rice </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pudding Jelly </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pop Corn </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Peas </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Fuska </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Paddy Puffed </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Flattened Rice </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pan Masala </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Fruit Snacks </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Chocolate &amp; Candy{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Lollipop </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Chocolate </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Gum </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mints </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Marshmallows </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Candy </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Condiments &amp; Dressings{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Honey </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sauce </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mayonnaise </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Vinegar </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Spreads </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Salad Dressings </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Jam </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Ketchup </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Relish &amp; Olives </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mustard </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Chutney </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Peanut Butter </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pickles </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Jelly </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Josti Modhu </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Pasta &amp; Side Dishes{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Noodles </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pasta </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Vermicelli </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soup </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Macaroni </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Spaghetti </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shemai </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Bread &amp; Bakery{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Cake </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Burger Bun </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pitha </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Cooking Ingredients{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Cocoa Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cornflour </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sabudana </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bashon </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baking Soda </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dry Fruits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Rose Water &amp; Kewra Water{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Tempura </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baking Ingredients </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Ice Cream Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Custard Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Essence </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Food Colour </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Arrowroot </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mawa </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Ghee </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Milk Substitutes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Batter Mix </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Baking Mixes &amp; Frosting{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bread Crumbs </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pancake Mix &amp; Syrup </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Gelatin Desserts </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cake Decoration </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dry Coconut Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Citric acid </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nuts </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Morobba </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Saffron (Jafran) </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Stock &amp; Cube </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Frozen Food </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Samosa &amp; Singara </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Frozen Food </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nuggets </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Spring Roll </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sausage </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Paratha </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Roti </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Meat Ball </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">French Fried </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Breakfast </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Oats &amp; Porridge </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cereal </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Oatmeal </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Muesli </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Ice Cream </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Ice Cream Containers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Health &amp; Nutrition{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">
                            Horlicks Health &amp; Malted Milk Drink{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Vitamin &amp; Supplements </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Health Care &amp; OTC Medications &amp; Treatments{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Natural Health Drinks Powder{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Biscuits &amp; Cookies{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Biscuits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Wafer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cookies </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Toast </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cream Biscuits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Crackers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Edible Oils </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Soybean Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sunflower Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Olive Oils </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Vegetable Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Seed Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mustard Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sesame &amp; Til Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Corn Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Canola Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Health Oils </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Canned Foods &amp; Gourmet Foods{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Tuna &amp; Seafood </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Fruit Cocktail </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mushroom </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link parent-link">
                    <img
                      src="https://backend.wholesaleclubltd.com/uploads/all/IGdSD5aSiarZbNlvuBcNjYQSQjeGwnPricNFcw5z.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    Perishable
                  </a>
                  <ul className="submenu collapse">
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Poultry </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Egg </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Duck &amp; Goose </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Chicken </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Birds </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Fish </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Sea Fish </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Freshwater Fish </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Frozen Fish </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dry Fish </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Vegetables </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Dry Vegetables Local </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Local Vegetables </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Foreign Vegetables </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dry Vegetables Foreign </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Fruits </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Foreign Fruits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Local Fruits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dried Fruits </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Meat </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Mutton </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Beef </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link parent-link">
                    <img
                      src="https://backend.wholesaleclubltd.com/uploads/all/ZrW3sc8i2XhpF5pw2jUvR2h05rpj13UzFtg8Q2pD.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    Baby &amp; Mother Care
                  </a>
                  <ul className="submenu collapse">
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Mothers &amp; Maternity{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Breast &amp; Nipple Care </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Baby Skin Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Baby Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Jelly </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Lotion </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Bath </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Diapers &amp; Wipes{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Baby Diaper </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Wipes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Baby Toiletries </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Baby Body Wash </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Soap </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Toothpaste </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Toothbrush </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bathing Tubs &amp; Seats </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Potties </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Shampoo </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Bath </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Cotton Buds </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Baby Toiletries Accessories{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Baby Food &amp; Formula{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Baby Milk &amp; Formula </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Food </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Infant Cereal </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Nutrition &amp; Supplement{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Organic Baby Food </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Outing </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Stroller </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Kids Lunchbox </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Household </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Highchair &amp; Walker </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Combs &amp; Brushes &amp; Clippers{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Accessories </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bath Accessories </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Towel </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hanger </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Sleeping </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Baby Bedding </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Blankets </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pillow </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mosquito Net </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Feeding &amp; Nursing{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Water Bottle </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mug </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dishes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Silicone Spoon </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Feeding Bottle </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Accessories </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Spoon </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Plate </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nipples </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Weaning </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Milk Bottle </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Baby Health &amp; Hygiene{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Silicone Pacifier </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Accessories </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nail Clipper </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soothers &amp; Teethers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Baby Bibs </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dental Care </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cleanser </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link parent-link">
                    <img
                      src="https://backend.wholesaleclubltd.com/uploads/all/mkXsHLihzkVOwqx56we6SFDWYXhcG5UBCpNfUxeL.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    Beauty &amp; Personal Care
                  </a>
                  <ul className="submenu collapse">
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Fragrances </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Body Spray </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Perfume </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Roll On </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Deodorant </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Deo Stick </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Foot Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Fashion &amp; Life Style </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Food &amp; Grocery </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Foot Brushes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Foot Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Toys &amp; Video Games </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Manicure Tool </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Nail Clippers &amp; Cutters{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Face Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Face Wash </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sun Block </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Gel </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Toners </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Pack </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cleansers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cleansing Gel </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cleansing Milk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Facial Cleanser </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Scrub </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Facial Foam </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Mask </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Wipes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Tonic </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Toners &amp; Astringents </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sunscreen </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Skin Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Body Lotion </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Olive Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Skin Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Serum </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Jelly &amp; Pomade </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Glycerin </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Body Mist </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Skin Oils &amp; Body Oils </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Talcum Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Body Butter </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Tea Tree Oil &amp; Essential Oils{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hand Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mehendi </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Bath &amp; Body Wash{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Shower Gel </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Body Wash </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Soaps </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shower Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hand Wash &amp; Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hand Sanitizer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bath Scrubber </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bath Accessories </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shower Milk </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Hair Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Almond Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shampoo </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Conditioner </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Serum </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Gels </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Color </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Pack </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Treatment </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Tonic </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Castor Oil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Mask </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Comb &amp; Brush </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Styling </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Shaving Needs &amp; Hair Removal{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">After Shave </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shaving Gels </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shaving Foam </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Razor </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Blade </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shaving Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Body Groomers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Trimmers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Remover </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Shaver </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Hair Accessories </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Hair Dryers &amp; Stylers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Straighteners </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Brushes &amp; Combs </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Epilators </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Health &amp; Wellness{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">
                            Massage Tools &amp; Equipment{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">First Aid </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Antiseptic Liquid </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Pain Relief </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Sweeteners &amp; Filters </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Antiseptic Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">
                            Medical Supplies &amp; Equipment{" "}
                          </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Thermometers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Women &amp; Personal Hygiene{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Sanitary Napkin </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Hair Remover </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Adult Diaper </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Oral Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Toothbrush </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Toothpick </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Toothpaste </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Tooth Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mouthwash </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dental Aids &amp; Floss </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Teeth Wipes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Personal Care Tools &amp; Accessories{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Cotton Buds </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cotton Pads </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cotton Swabs </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Cotton Ball </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Sexual Wellness </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Condoms </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link parent-link">
                    <img
                      src="https://backend.wholesaleclubltd.com/uploads/all/OygESFnzbHVNoayhIEBDE7CU11vbioguyWXcxlYa.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    Color Cosmetics
                  </a>
                  <ul className="submenu collapse">
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Body Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Shimmers &amp; Glitters </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">
                        Makeup Accessories{" "}
                      </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Makeup Remover Wipes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bags &amp; Cases </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Makeup Brush Cleaner </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eye Brush </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Tweezers &amp; Pluckers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nail Filers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Makeup Remover </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Puffs &amp; Sponges </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eyelash Curlers </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">False Eyelashes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Makeup Fixing </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Makeup Brushes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Face Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Makeup </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Foundation </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Spray Lotion </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Primer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Compact Powder </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">BB &amp; CC Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Blushes </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Concealer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Highlighters </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Face Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Illuminator </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Bronzer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Contour </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Skin Toner </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Lips Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Lipstick </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Liner </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Color </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Balm </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Gloss </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Primer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Therapy </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Care </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Lush </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Lip Pencil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Eye Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Kajal &amp; Kohl </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eyeliner </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Serum </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Mascara </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Dipliner </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eye Shadow </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eye Pencil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eyebrow Pencil </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eye Primer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eyebrow </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Eye Cream </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a className="nav-link parent-link">Nail Care </a>
                      <ul className="submenu collapse ">
                        <li className="has-submenu">
                          <a className="nav-link">Nail Lacquer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nail Color </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nail Polish </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nail Enamel Remover </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                        <li className="has-submenu">
                          <a className="nav-link">Nail File &amp; Buffer </a>
                          <ul className="submenu collapse"></ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-10">
              <BannerSection />
            </div>
          </div>
        </div>
      </section>
      <TopSellingSection />
      <section className="category_section my-3">
        <div className="container-fluid">
          <h4>Categories</h4>
          <div className="d-flex flex-wrap mt-3">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </section>
    </>
  );
}
