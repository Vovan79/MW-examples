import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import MainTitle from '../../style/MainTitle';
import BankOffers from '../../BankOffers';
import SortBar from './../list/sort-bar/sort-bar-component';
import MoreBtn from './../list/more-button/more-button.component';
import { styles } from './similar-offers.styles';
import { offerTypes } from '../../../lib/constants';
import * as Kredit from '../list/Item/Kredit';
import * as Ipoteka from '../list/Item/Ipoteka';
import * as DebetovayKarta from '../list/Item/DebetovayKarta';
import * as KreditnayaKarta from '../list/Item/KreditnayaKarta';
import * as KartaRassrochki from '../list/Item/KartaRassrochki';

// Offer component map
const OFFER_TYPE_COMPONENT_MAP = {
  [offerTypes.AVTOKREDITOVANIE]: Kredit,
  [offerTypes.MIKRO_KREDIT]: Kredit,
  [offerTypes.POTREBITELSKII_KREDIT]: Kredit,
  [offerTypes.IPOTEKA]: Ipoteka,
  [offerTypes.DEBETOVAYA_KARTA]: DebetovayKarta,
  [offerTypes.KREDITNAYA_KARTA]: KreditnayaKarta,
  [offerTypes.KARTA_RASSROCHKI]: KartaRassrochki,
};

class SimilarOffers extends PureComponent {
    static propTypes = {
      offers: PropTypes.arrayOf(PropTypes.object).isRequired,
      classes: PropTypes.shape({
        wrapper: PropTypes.string,
      }).isRequired,
    };

    render() {
      const { classes, offers } = this.props;
      const type = offers[0].typeOffer.slug;
      const container = OFFER_TYPE_COMPONENT_MAP[type];

      if (!container) {
        throw new Error(`page: category, component: List, error: unknown offerType: ${type}`);
      }
      const isOffersExist = (offers.length > 0);

      return (
        <section className={classes.container}>
          <MainTitle as="h2" alignDesktop="left">
              Похожие предложения банков
          </MainTitle>
          {/*<BankOffers cssMargin={"0 0 20px 0"} offers={offers} />*/}

          <SortBar items={container.sortBarItems} />
          <div className={classes.offersList}>
            {!isOffersExist && <h2 className={classes.notFound}>Предложений не найдено.</h2>}
            {offers.map(offer => (
              <div className={classes.offersListItem} key={offer._id}>
                <container.ListItem key={offer._id} offer={offer} />
              </div>
            ))}
          </div>
          <div className={classes.moreButton}>
            <MoreBtn title="Показать все продукты" />
          </div>
        </section>
      );
    }
}

export default withStyles(styles)(SimilarOffers);
