import React, { Component } from "react";
import { connect } from "dva";
import styles from "./icon.less";
import iconStyles from '../../styles/icono.min.css';

class Icon extends Component {
  state = {
    iconName: "",
  };

  getIconName = (e) => {
    this.setState({
      iconName: e,
    });
  };

  render = () => {
    return (
      <div className={styles.body}>
        <h1>ICONO {this.state.iconName}</h1>
        <div className={styles.stage}>
        <span><i className={iconStyles.icono_home}></i></span>
        <span><i className={iconStyles.icono_mail}></i></span>
        <span><i className={iconStyles.icono_rss}></i></span>
        <span><i className={iconStyles.icono_hamburger}></i></span>
        <span><i className={iconStyles.icono_plus}></i></span>
        <span><i className={iconStyles.icono_cross}></i></span>
        <span><i className={iconStyles.icono_check}></i></span>
        <span><i className={iconStyles.icono_power}></i></span>
        <span><i className={iconStyles.icono_heart}></i></span>
        <span><i className={iconStyles.icono_flag}></i></span>
        <span><i className={iconStyles.icono_share}></i></span>
        <span><i className={iconStyles.icono_pin}></i></span>
        <span><i className={iconStyles.icono_locationArrow}></i></span>
        <span><i className={iconStyles.icono_asterisk}></i></span>
        <span><i className={iconStyles.icono_image}></i></span>
        <span><i className={iconStyles.icono_video}></i></span>
        <span><i className={iconStyles.icono_music}></i></span>
        <span><i className={iconStyles.icono_document}></i></span>
        <span><i className={iconStyles.icono_file}></i></span>
        <span><i className={iconStyles.icono_folder}></i></span>
        <span><i className={iconStyles.icono_smile}></i></span>
        <span><i className={iconStyles.icono_frown}></i></span>
        <span><i className={iconStyles.icono_meh}></i></span>
        <span><i className={iconStyles.icono_user}></i></span>
        <span><i className={iconStyles.icono_eye}></i></span>
        <span><i className={iconStyles.icono_sliders}></i></span>
        <span><i className={iconStyles.icono_infinity}></i></span>
        <span><i className={iconStyles.icono_sync}></i></span>
        <span><i className={`${iconStyles.icono_sync} ${iconStyles.spin}`}></i></span>
        <span><i className={iconStyles.icono_reset}></i></span>
        <span><i className={`${iconStyles.icono_reset} ${iconStyles.spin}`}></i></span>
        <span><i className={iconStyles.icono_gear}></i></span>
        <span><i className={`${iconStyles.icono_gear} ${iconStyles.spin}`}></i></span>
        <span><i className={iconStyles.icono_signIn}></i></span>
        <span><i className={iconStyles.icono_signOut}></i></span>
        <span><i className={iconStyles.icono_book}></i></span>
        <span><i className={iconStyles.icono_support}></i></span>
        <span><i className={iconStyles.icono_dropper}></i></span>
        <span><i className={iconStyles.icono_chain}></i></span>
        <span><i className={iconStyles.icono_paperClip}></i></span>
        <span><i className={iconStyles.icono_search}></i></span>
        <span><i className={iconStyles.icono_rename}></i></span>
        <span><i className={iconStyles.icono_crop}></i></span>
        <span><i className={iconStyles.icono_trash}></i></span>
        <span><i className={iconStyles.icono_keyboard}></i></span>
        <span><i className={iconStyles.icono_mouse}></i></span>
        <span><i className={iconStyles.icono_headphone}></i></span>
        <span><i className={iconStyles.icono_microphone}></i></span>
        <span><i className={iconStyles.icono_display}></i></span>
        <span><i className={iconStyles.icono_imac}></i></span>
        <span><i className={iconStyles.icono_iphone}></i></span>
        <span><i className={iconStyles.icono_macbook}></i></span>
        <span><i className={iconStyles.icono_imacBold}></i></span>
        <span><i className={iconStyles.icono_iphoneBold}></i></span>
        <span><i className={iconStyles.icono_macbookBold}></i></span>
        <span><i className={iconStyles.icono_nexus}></i></span>
        <span><i className={iconStyles.icono_terminal}></i></span>
        <span><i className={iconStyles.icono_youtube}></i></span>
        <span><i className={iconStyles.icono_market}></i></span>
        <span><i className={iconStyles.icono_clock}></i></span>
        <span><i className={iconStyles.icono_tiles}></i></span>
        <span><i className={iconStyles.icono_list}></i></span>
        <span><i className={iconStyles.icono_forbidden}></i></span>
        
        <span><i className={iconStyles.icono_plusCircle}></i></span>

        <span><i className={iconStyles.icono_crossCircle}></i></span>

        <span><i className={iconStyles.icono_checkCircle}></i></span>
        <span><i className={iconStyles.icono_exclamationCircle}></i></span>
        <span><i className={iconStyles.icono_exclamation}></i></span>
        <span><i className={iconStyles.icono_textAlignRight}></i></span>

        <span><i className={iconStyles.icono_textAlignCenter}></i></span>
        <span><i className={iconStyles.icono_textAlignLeft}></i></span>
        <span><i className={iconStyles.icono_indent}></i></span>
        <span><i className={iconStyles.icono_outdent}></i></span>
        <span><i className={iconStyles.icono_comment}></i></span>
        <span><i className={iconStyles.icono_commentEmpty}></i></span>
        <span><i className={iconStyles.icono_areaChart}></i></span>
        <span><i className={iconStyles.icono_pieChart}></i></span>
        <span><i className={iconStyles.icono_barChart}></i></span>
        <span><i className={iconStyles.icono_bookmark}></i></span>
        <span><i className={iconStyles.icono_bookmarkEmpty}></i></span>
        <span><i className={iconStyles.icono_filter}></i></span>
        <span><i className={iconStyles.icono_volume}></i></span>
        <span><i className={iconStyles.icono_volumeLow}></i></span>
        <span><i className={iconStyles.icono_volumeMedium}></i></span>
        <span><i className={iconStyles.icono_volumeHigh}></i></span>
        <span><i className={iconStyles.icono_volumeDecrease}></i></span>
        <span><i className={iconStyles.icono_volumeIncrease}></i></span>
        <span><i className={iconStyles.icono_volumeMute}></i></span>
        <span><i className={iconStyles.icono_tag}></i></span>
        <span><i className={iconStyles.icono_calendar}></i></span>
        <span><i className={iconStyles.icono_camera}></i></span>
        <span><i className={iconStyles.icono_piano}></i></span>
        <span><i className={iconStyles.icono_ruler}></i></span>
        <span><i className={iconStyles.icono_cup}></i></span>
        <span><i className={iconStyles.icono_creditCard}></i></span>
        <span><i className={iconStyles.icono_facebook}></i></span>
        <span><i className={iconStyles.icono_twitter}></i></span>
        <span><i className={iconStyles.icono_instagram}></i></span>
        <span><i className={iconStyles.icono_linkedIn}></i></span>
        <span><i className={iconStyles.icono_flickr}></i></span>
        <span><i className={iconStyles.icono_delicious}></i></span>
        <span><i className={iconStyles.icono_codepen}></i></span>
        <span><i className={iconStyles.icono_blogger}></i></span>
        </div>
      </div>
    );
  };
}

// IndexPage.propTypes = {};

export default connect()(Icon);
