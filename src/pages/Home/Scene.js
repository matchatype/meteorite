import React from 'react';
import { Link as RouterLink } from "@reach/router";
import styled from 'react-emotion';
import { routes } from '../../constants';
import Curve from '../../components/Curve';
import Icon from '../../components/Icon';
import Logo from '../../components/Logo';
import '../../styles/gradient.css';

const Header = styled('h1')({
  color: '#fff',
  padding: '0 20px',
  margin: '0 auto 20px',
  letterSpacing: '-1.0px'
});

const SubHeader = styled(Header)({
  fontWeight: 500,
  maxWidth: 460,
  color: '#fff',
  fontSize: 24,
  marginBottom: 30,
  letterSpacing: '-0.25px'
});

const LandingHeader = styled('div')({
  position: 'relative',
  width: '100%',
  margin: '54px 20px',
  maxWidth: 1000,
  display: 'flex',
  justifyContent: 'space-between',
});

const LandingMessage = styled(LandingHeader)({
  flexDirection: 'column',
  textAlign: 'center',
  maxWidth: 1000,
  'h1': {
    display: 'block'
  }
});

const SmallLink = styled('a')({
  fontSize: '12px',
  fontWeight: '700',
  color: '#ffffff',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
});

const SmallText = styled('span')({
  fontSize: '12px',
  fontWeight: '500',
  color: '#ffffff',
});

const BottomLinkContainer = styled(LandingHeader)({
  maxWidth: 350,
  width: '100%',
  margin: '32px auto 0',
});

const LinkButton = styled('a')({});

const UnofficialReleaseTag = styled('span')({
  color: 'white',
  position: 'absolute',
  left: '44px',
  bottom: '7px',
  fontSize: '11px',
  background: '#f42839',
  fontWeight: '800',
  padding: '2px 4px',
  borderRadius: '4px',
  textTransform: 'uppercase',
});

export default function Scene ({loggedIn, onLogout, ...props}) {
  return (
    <div className="container-gradient" style={{
      width: '100%',
      height: 600,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'hidden'
    }}>
      <LandingHeader>
        <Logo size={75} />
        <UnofficialReleaseTag>beta</UnofficialReleaseTag>
        {loggedIn ? (
          <div className="button-container">
            <RouterLink style={{marginRight: 15}} to={routes.NOTIFICATIONS}>notifications</RouterLink>
            <LinkButton style={{marginRight: 15}} href="#" onClick={onLogout}>sign out</LinkButton>
          </div>
        ) : (
          <div className="button-container">
            <RouterLink style={{marginRight: 15}} to={routes.LOGIN}>sign in</RouterLink>
          </div>
        )}
      </LandingHeader>
      <LandingMessage>
        <Header>Control your notifications</Header>
        <SubHeader>Prioritize the tasks that keep you and your team most productive</SubHeader>
        <div className="button-container">
          <RouterLink to={routes.LOGIN}>let's get started</RouterLink>
        </div>
        <BottomLinkContainer>
          <SmallLink target="_blank" href="https://github.com/nickzuber/meteorite">View and contribute on GitHub</SmallLink>
          <SmallText>
            <Icon.PeopleWhite
              shrink={0.55}
              style={{
                display: 'inline-block',
                top: -3
              }}
            />
            Free and open sourced
          </SmallText>
        </BottomLinkContainer>
      </LandingMessage>
      <Curve />
    </div>
  );
};
