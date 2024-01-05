import style from "../../css/setting_person.module.css";
import React, { useState } from "react";
import FaceItemComponent from "./face_item";
import HairItemComponent from "./hair_item";
import PersonInfo from "./person_info";

import adrian from "../../images/setting_person/male/adrian.webp";
import alex from "../../images/setting_person/male/alex.webp";
import andrew from "../../images/setting_person/male/andrew.webp";
import angel from "../../images/setting_person/male/angel.webp";
import anthony from "../../images/setting_person/male/anthony.webp";
import benjamin from "../../images/setting_person/male/benjamin.webp";
import claude from "../../images/setting_person/male/claude.webp";
import daniel from "../../images/setting_person/male/daniel.webp";
import diego from "../../images/setting_person/male/diego.webp";
import ethan from "../../images/setting_person/male/ethan.webp";
import evan from "../../images/setting_person/male/evan.webp";
import gabriel from "../../images/setting_person/male/gabriel.webp";
import isaac from "../../images/setting_person/male/isaac.webp";
import john from "../../images/setting_person/male/john.webp";
import joshua from "../../images/setting_person/male/joshua.webp";
import juan from "../../images/setting_person/male/juan.webp";
import kevin from "../../images/setting_person/male/kevin.webp";
import louis from "../../images/setting_person/male/louis.webp";
import michael from "../../images/setting_person/male/michael.webp";
import niko from "../../images/setting_person/male/niko.webp";
import noah from "../../images/setting_person/male/noah.webp";
import samuel from "../../images/setting_person/male/samuel.webp";
import santiago from "../../images/setting_person/male/santiago.webp";
import vincent from "../../images/setting_person/male/vincent.webp";

import amelia from "../../images/setting_person/female/amelia.webp";
import ashley from "../../images/setting_person/female/ashley.webp";
import audrey from "../../images/setting_person/female/audrey.webp";
import ava from "../../images/setting_person/female/ava.webp";
import brianna from "../../images/setting_person/female/brianna.webp";
import camila from "../../images/setting_person/female/camila.webp";
import charlotte from "../../images/setting_person/female/charlotte.webp";
import elizabeth from "../../images/setting_person/female/elizabeth.webp";
import emma from "../../images/setting_person/female/emma.webp";
import evelyn from "../../images/setting_person/female/evelyn.webp";
import giselle from "../../images/setting_person/female/giselle.webp";
import grace from "../../images/setting_person/female/grace.webp";
import hannah from "../../images/setting_person/female/hannah.webp";
import isabella from "../../images/setting_person/female/isabella.webp";
import jasmine from "../../images/setting_person/female/jasmine.webp";
import misty from "../../images/setting_person/female/misty.webp";
import natalie from "../../images/setting_person/female/natalie.webp";
import nicole from "../../images/setting_person/female/nicole.webp";
import olivia from "../../images/setting_person/female/olivia.webp";
import sophia from "../../images/setting_person/female/sophia.webp";
import violet from "../../images/setting_person/female/violet.webp";
import zoe from "../../images/setting_person/female/zoe.webp";
import {
  Add,
  ChevronUpCircleOutline,
  ChevronDownCircleOutline,
} from "react-ionicons";

function SettingPerson() {
  const [similarityValue, setValue] = useState(0);
  const [spaciesValue, setSpaciesValue] = useState(0);
  const [personComponent, setPersonComponent] = useState("");
  const [firstGene, setFirstGene] = useState("albert");
  const [secondGene, setSecondGene] = useState("jessica");

  const male = [
    "adrian",
    "alex",
    "andrew",
    "angel",
    "anthony",
    "benjamin",
    "claude",
    "niko",
    "daniel",
    "diego",
    "ethan",
    "evan",
    "gabriel",
    "isaac",
    "john",
    "joshua",
    "juan",
    "kevin",
    "louis",
    "michael",
    "noah",
    "samuel",
    "santiago",
    "vincent",
  ];

  const female = [
    "amelia",
    "ashley",
    "audrey",
    "ava",
    "brianna",
    "camila",
    "charlotte",
    "elizabeth",
    "emma",
    "evelyn",
    "giselle",
    "grace",
    "hannah",
    "isabella",
    "jasmine",
    "misty",
    "natalie",
    "nicole",
    "olivia",
    "sophia",
    "violet",
    "zoe",
  ];

  const handlePersonComponentChange = (component) => {
    setPersonComponent(component);
  };
  function getGeneImage(gene) {
    switch (gene) {
      case "adrian":
        return adrian;
      case "alex":
        return alex;
      case "andrew":
        return andrew;
      case "angel":
        return angel;
      case "anthony":
        return anthony;
      case "benjamin":
        return benjamin;
      case "claude":
        return claude;
      case "niko":
        return niko;
      case "daniel":
        return daniel;
      case "diego":
        return diego;
      case "ethan":
        return ethan;
      case "evan":
        return evan;
      case "gabriel":
        return gabriel;
      case "isaac":
        return isaac;
      case "john":
        return john;
      case "joshua":
        return joshua;
      case "juan":
        return juan;
      case "kevin":
        return kevin;
      case "louis":
        return louis;
      case "michael":
        return michael;
      case "noah":
        return noah;
      case "samuel":
        return samuel;
      case "santiago":
        return santiago;
      case "vincent":
        return vincent;

      case "amelia":
        return amelia;
      case "ashley":
        return ashley;
      case "audrey":
        return audrey;
      case "ava":
        return ava;
      case "brianna":
        return brianna;
      case "camila":
        return camila;
      case "charlotte":
        return charlotte;
      case "elizabeth":
        return elizabeth;
      case "emma":
        return emma;
      case "evelyn":
        return evelyn;
      case "giselle":
        return giselle;
      case "grace":
        return grace;
      case "hannah":
        return hannah;
      case "isabella":
        return isabella;
      case "jasmine":
        return jasmine;
      case "misty":
        return misty;
      case "natalie":
        return natalie;
      case "nicole":
        return nicole;
      case "olivia":
        return olivia;
      case "sophia":
        return sophia;
      case "violet":
        return violet;
      case "zoe":
        return zoe;

      default:
        return null;
    }
  }

  const handleSpaciesChange = (e) => {
    const newValue = e.target.value;
    setSpaciesValue(newValue);
  };
  const handleSimilarityChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <div className={style.container}>
      <div className={style.left_block}>
        <div className={style.left_head_block}>
          <div
            className={style.head_item}
            onClick={() => handlePersonComponentChange("personInfo")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path d="M5970 12090 c-417 -39 -761 -113 -1094 -236 -154 -56 -404 -178 -550 -267 -328 -202 -651 -502 -876 -817 -340 -475 -557 -1060 -660 -1783 -12 -81 -19 -151 -16 -156 3 -5 47 -34 96 -65 l91 -56 672 -80 c370 -44 685 -81 702 -83 l29 -2 28 150 c166 905 518 1459 1115 1759 267 133 553 196 900 196 485 0 899 -141 1253 -427 171 -139 357 -351 469 -537 238 -393 302 -907 165 -1326 -39 -120 -137 -307 -215 -410 -166 -221 -419 -479 -819 -835 -595 -531 -865 -813 -1076 -1125 -408 -602 -572 -1262 -547 -2203 l6 -247 691 2 691 3 2 105 c6 302 37 709 69 895 57 336 189 636 393 890 94 118 451 467 766 750 914 822 1312 1312 1528 1882 223 586 235 1285 32 1901 -150 453 -433 881 -816 1231 -544 498 -1190 775 -2044 876 -162 20 -828 29 -985 15z" />
                <path d="M5581 2590 c-20 -98 -21 -121 -21 -920 l0 -820 810 0 810 0 0 828 c-1 740 -3 836 -18 917 l-17 90 -771 3 -771 2 -22 -100z" />
              </g>
            </svg>
          </div>
          <div
            className={style.head_item}
            onClick={() => handlePersonComponentChange("faceSetting")}
          >
            <svg
              viewBox="0 0 43 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8888 0C13.3489 0 4.77752 8.57756 4.77752 19.125V21.9364L0.168522 31.161C-0.0799244 31.6551 -0.0512576 32.2416 0.238596 32.7101C0.52845 33.1787 1.04127 33.4688 1.59231 33.4688H4.77752V41.1442C4.77752 42.0814 5.18522 42.9643 5.90189 43.5699C6.61857 44.1756 7.54865 44.4401 8.47873 44.2839L14.3331 43.3149V49.4062C14.3331 49.8748 14.537 50.3211 14.8969 50.6207C15.1868 50.8661 15.5499 51 15.9257 51C16.0117 51 16.1009 50.9936 16.1869 50.9777L35.2982 47.7902C36.0658 47.6627 36.6296 46.9997 36.6296 46.2188V36.3981C36.6296 34.1796 37.7189 32.4009 38.6331 31.2949C41.4488 27.8906 43 23.5684 43 19.125C43 8.57756 34.4286 0 23.8888 0Z"
                fill="#E5FFFF"
              ></path>
            </svg>
          </div>
          <div
            className={style.head_item}
            onClick={() => handlePersonComponentChange("hairSetting")}
          >
            <svg
              viewBox="0 0 47 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.8636 31.8752C44.195 31.8752 43.5519 31.5628 43.1396 31.0061L37.6406 23.5389C35.7499 20.972 32.0668 20.394 29.422 22.2576C25.8799 24.7565 21.1201 24.7565 17.5737 22.2576C14.9375 20.3961 11.248 20.972 9.35727 23.5389L3.85827 31.0061C3.3135 31.7498 2.34359 32.0558 1.47195 31.7711C0.593909 31.4842 0 30.6704 0 29.7502C0 26.9261 0.277727 23.5283 0.826773 19.6566C1.93341 11.8239 8.90864 5.92076 17.0503 5.92076H23.2372C27.3091 5.92076 31.1503 4.19315 33.7738 1.18419C34.6796 0.270447 35.7798 -0.112048 36.9249 0.0282002C38.0508 0.168449 39.0292 0.810191 39.6082 1.78556C41.8279 5.52551 47 15.7424 47 29.7502C47 30.6704 46.4061 31.4842 45.528 31.7711C45.3101 31.8412 45.0858 31.8752 44.8636 31.8752Z"
                fill="#E5FFFF"
              ></path>{" "}
              <path
                d="M37.3009 42.1814C36.5959 41.8201 35.7414 41.8626 35.1005 42.3301C34.3527 42.8401 34.1177 42.7763 33.9468 42.6276L32.1736 40.4601C30.9986 39.0364 29.14 38.2501 27.2386 38.2501C26.2345 38.2501 25.2091 38.4626 24.2691 38.9301C23.7991 39.1426 23.2009 39.1426 22.7309 38.9301C21.7909 38.4626 20.7655 38.2501 19.7614 38.2501C17.86 38.2501 16.0014 39.0364 14.8264 40.4601L13.0532 42.6276C12.8823 42.7763 12.6473 42.8401 11.8995 42.3301C11.2586 41.8839 10.4041 41.8201 9.69909 42.1814C8.99409 42.5426 8.54545 43.2651 8.54545 44.0726C8.54545 47.8975 12.1559 51 16.5995 51C19.2059 51 21.6414 50.1713 23.5 48.6625C25.3373 50.1713 27.7941 51 30.4005 51C34.8441 51 38.4545 47.8975 38.4545 44.0726C38.4545 43.2651 38.0059 42.5426 37.3009 42.1814Z"
                fill="#E5FFFF"
              ></path>
            </svg>
          </div>
        </div>
        {(() => {
          switch (personComponent) {
            case "personInfo":
              return <PersonInfo />;
            case "faceSetting":
              return <FaceItemComponent />;
            case "hairSetting":
              return <HairItemComponent />;
            default:
              return <PersonInfo />;
          }
        })()}
      </div>
      <div className={style.center_block}></div>
      <div className={style.right_block}>
        <div className={style.genetics}>
          <div className={style.select_first_gene}>
            <button
              onClick={() =>
                setFirstGene(
                  male[
                    (male.indexOf(firstGene) - 1 + male.length) % male.length
                  ]
                )
              }
            >
              <ChevronUpCircleOutline color="#000" />
            </button>
            <label>{firstGene}</label>
            <button
              onClick={() =>
                setFirstGene(male[(male.indexOf(firstGene) + 1) % male.length])
              }
            >
              <ChevronDownCircleOutline color="#000" />
            </button>
          </div>
          <div className={style.select_second_gene}>
            <button
              onClick={() =>
                setSecondGene(
                  female[
                    (female.indexOf(secondGene) - 1 + female.length) %
                      female.length
                  ]
                )
              }
            >
              <ChevronUpCircleOutline color="#000" />
            </button>
            <label>{secondGene}</label>
            <button
              onClick={() =>
                setSecondGene(
                  female[(female.indexOf(secondGene) + 1) % female.length]
                )
              }
            >
              <ChevronDownCircleOutline color="#000" />
            </button>
          </div>
          <div className={style.present}>
            <div
              className={style.present_first_gene}
              style={{ backgroundImage: `url(${getGeneImage(firstGene)})` }}
            ></div>
            <div
              className={style.present_second_gene}
              style={{ backgroundImage: `url(${getGeneImage(secondGene)})` }}
            ></div>
          </div>
          <div classname={style.detail_setting_gen}>
            <div className={style.species}>
              <span>Раса</span>
              <input
                className={style.slyder_type_one}
                type="range"
                id="species_"
                min="0"
                max="7"
                value={spaciesValue}
                onChange={handleSpaciesChange}
                step="1"
              ></input>
              <span>{spaciesValue}</span>
            </div>
            <div className={style.similarity}>
              <span>Схожость</span>
              <input
                className={style.slyder_type_one}
                type="range"
                id="similarity_"
                min="-1.0"
                max="1.0"
                value={similarityValue}
                step="0.1"
                defaultValue={similarityValue}
                onChange={handleSimilarityChange}
              ></input>
              <span>{similarityValue}</span>
            </div>
          </div>
        </div>
        <div className={style.save_button}>
          <button>
            <Add color={"#fff"} width={"35px"} height={"35px"} />
            <span>Сохранить</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingPerson;
