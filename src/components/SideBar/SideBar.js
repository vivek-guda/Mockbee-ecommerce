import "./SideBar.css";
import { useFilter } from "../../context/filter-context";
import { useState } from "react";

function SideBar() {
  const { filterState, filterDispatch } = useFilter();
  const [menChecked, setMenChecked] = useState(false);
  const [womenChecked, setWomenChecked] = useState(false);
  const [kidsChecked, setKidsChecked] = useState(false);

  const CategoryClickHandler = (event) => {
    const checked = event.target.checked;
    const typeCategory = event.target.value;
    if (checked) {
      return { type: "SET_CATEGORY", payload: typeCategory };
    } else {
      return { type: "UNSET_CATEGORY", payload: typeCategory };
    }
  };

  const BrandClickHandler = (event) => {
    const checked = event.target.checked;
    const typeBrand = event.target.value;
    if (checked) {
      return { type: "SET_BRAND", payload: typeBrand };
    } else {
      return { type: "UNSET_BRAND", payload: typeBrand };
    }
  };

  return (
    <aside className="sidebar">
      <div>
        <div className="filter-section filter-header">
          <p className="filter-title">FILTERS</p>
          <p
            className="filter-clear"
            onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
          >
            Clear All
          </p>
        </div>
        <div className="filter-section">
          <span className="filter-category">SORT BY</span>
          <ul className="filter-option-list">
            <li>
              <label className="filter-label">
                <input
                  type="radio"
                  name="price-sort"
                  onChange={() => filterDispatch({ type: "PRICE_LOW_TO_HIGH" })}
                />
                Price - Low to High
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="radio"
                  name="price-sort"
                  onChange={() => filterDispatch({ type: "PRICE_HIGH_TO_LOW" })}
                />
                Price - High to Low
              </label>
            </li>
          </ul>
        </div>

        <div className="filter-section">
          <span className="filter-category">PRICE</span>
          <div className="sidebar-slider">
            0
            <input
              type="range"
              max={10000}
              step={200}
              defaultValue={10000}
              onChange={(event) =>
                filterDispatch({
                  type: "FILTER_BY_RANGE",
                  payload: event.target.value,
                })
              }
              className="slider"
            />
            10000
          </div>
        </div>

        <div className="filter-section">
          <span className="filter-category">RATING</span>
          <ul className="filter-option-list">
            <li>
              <label className="filter-label">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => filterDispatch({ type: "4_STAR_AND_ABOVE" })}
                />
                &gt;= 4 star
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => filterDispatch({ type: "3_STAR_AND_ABOVE" })}
                />
                &gt;= 3 star
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="radio"
                  name="rating"
                  onChange={() => filterDispatch({ type: "BELOW_3_STAR" })}
                />
                &lt; 3 star
              </label>
            </li>
          </ul>
        </div>

        <div className="filter-section">
          <span className="filter-category">CATEGORIES</span>
          <ul className="filter-option-list">
            <li>
              <label className="filter-label">
                <input
                  type="checkbox"
                  value="Men"
                  onClick={() => {
                    setMenChecked(!menChecked);
                  }}
                  onChange={(event) =>
                    filterDispatch(CategoryClickHandler(event))
                  }
                />
                Men
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="checkbox"
                  value="Women"
                  onClick={() => {
                    setWomenChecked(!womenChecked);
                  }}
                  onChange={(event) =>
                    filterDispatch(CategoryClickHandler(event))
                  }
                />
                Women
              </label>
            </li>
            <li>
              <label className="filter-label">
                <input
                  type="checkbox"
                  value="Kids"
                  onClick={() => {
                    setKidsChecked(!kidsChecked);
                  }}
                  onChange={(event) =>
                    filterDispatch(CategoryClickHandler(event))
                  }
                />
                Kids
              </label>
            </li>
          </ul>
        </div>

        <div className="filter-section">
          <span className="filter-category">BRANDS</span>
          <ul className="filter-option-list">
            {((!menChecked && !womenChecked && !kidsChecked) || menChecked) && (
              <>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="Puma"
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    Puma
                  </label>
                </li>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="Roadster"
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    Roadster
                  </label>
                </li>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="U.S. Polo Assn."
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    U.S. Polo Assn.
                  </label>
                </li>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="Wrogn"
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    Wrogn
                  </label>
                </li>
              </>
            )}
            {((!menChecked && !womenChecked && !kidsChecked) ||
              womenChecked) && (
              <>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="Biba"
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    Biba
                  </label>
                </li>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="Neerus"
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    Neerus
                  </label>
                </li>
                <li>
                  <label className="filter-label">
                    <input
                      className="filter-checkbox"
                      type="checkbox"
                      value="W"
                      onChange={(event) =>
                        filterDispatch(BrandClickHandler(event))
                      }
                    />
                    W
                  </label>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
