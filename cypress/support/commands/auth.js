import promisify from 'cypress-promise';
import { dateUsHelper } from '../../../old-app/helpers/dateHelper';

Cypress.Commands.add('checkChangePasswordModal', hasPassword => {
  cy.get('[data-cy=change-password-link]')
    .should('contain', hasPassword ? 'Change Password' : 'Add Password')
    .click();
  cy.get('[data-cy=change-password-modal-title]').should(
    'contain',
    hasPassword ? 'Change Password' : 'Add Password',
  );
  cy.get('[data-cy=change-password-modal-description]').should(
    'contain',
    hasPassword
      ? 'Enter a new password'
      : 'Add a password to login with email and password',
  );

  if (hasPassword) {
    cy.get('[data-cy=password]').should('have.length', 2);
  } else {
    cy.get('[data-cy=password]').should('have.length', 1);
  }
  if (hasPassword) {
    cy.get('[data-cy=password]')
      .eq(0)
      .type('myFirst100');
    cy.get('[data-cy=password-submit]')
      .find('button')
      .should('contain', 'SAVE NEW PASSWORD')
      .should('have.attr', 'disabled')
      .and('contain', 'disabled');
    cy.get('[data-cy=password]')
      .eq(1)
      .type('myFirst100');
    cy.get('[data-cy=password-submit]')
      .find('button')
      .should('contain', 'SAVE NEW PASSWORD')
      .should('not.have.attr', 'disabled');
  } else {
    cy.get('[data-cy=password-submit]')
      .find('button')
      .should('contain', 'SAVE NEW PASSWORD')
      .should('have.attr', 'disabled')
      .and('contain', 'disabled');
    cy.get('[data-cy=password]').type('myFirst100');
    cy.get('[data-cy=password-submit]')
      .find('button')
      .should('contain', 'SAVE NEW PASSWORD')
      .should('not.have.attr', 'disabled');
  }
});
Cypress.Commands.add('signInWithEmail', () => {
  cy.visit('/login');
  const email = Cypress.env('email1');
  const password = Cypress.env('password');
  cy.get('[data-cy=email-input]')
    .should('exist')
    .type(email);
  cy.get('[data-cy=login]')
    .find('button')
    .should('contain', 'SIGN IN')
    .should('have.attr', 'disabled')
    .and('contain', 'disabled');
  cy.get('[data-cy=password]')
    .should('exist')
    .type(password);
  cy.get('[data-cy=login]')
    .find('button')
    .should('contain', 'SIGN IN')
    .should('not.have.attr', 'disabled');
  cy.get('[data-cy=login]').click();
  cy.url().should('contain', '/you');
});
Cypress.Commands.add('checkRegisterText', (blocName = false) => {
  if (blocName) {
    cy.get('[data-cy=title]').contains(`Join ${blocName}`);
    cy.get('[data-cy=description]')
      .should('contain', 'Sign-up to be counted')
      .and('contain', 'notify you if we can win!');
  } else {
    cy.get('[data-cy=title]').contains('Join The Good Party');
    cy.get('[data-cy=description]')
      .should('contain', 'Have your choices count and')
      .and('contain', 'fix politics for Good!');
  }
});
Cypress.Commands.add('checkSocialLoginSection', () => {
  cy.get('[data-cy=facebook-social-login]')
    .contains('Continue with FACEBOOK')
    .click();
  cy.get('alert').should('not.exist');
  cy.get('[data-cy=twitter-social-login]')
    .contains('Continue with Twitter')
    .click();
  cy.get('alert').should('not.exist');
  cy.get('[data-cy=google-social-login]')
    .contains('Continue with GOOGLE')
    .click();
  cy.get('alert').should('not.exist');
});

Cypress.Commands.add('checkEmailRegisterSection', () => {
  cy.get('[data-cy=email-register]')
    .should('contain', 'CONTINUE WITH EMAIL')
    .should('have.attr', 'href')
    .and('contain', '/you/register-email');
  cy.get('[data-cy=email-register]').click();
  cy.checkEmailRegisterPage();
});
Cypress.Commands.add('checkLoginConfirmPage', email => {
  cy.url().should('include', '/login/confirm');
  cy.get('[data-cy=page-title]').contains('Login Code Confirmation');
  cy.get('[data-cy=title]').should('contain', `A code was sent to ${email}`);
  cy.get('[data-cy=return-link]')
    .should('contain', `Didn’t receive the code?`)
    .should('have.attr', 'href')
    .and('contain', '/login');
  cy.get('[data-cy=submit]')
    .find('button')
    .should('contain', 'Confirm');
});

Cypress.Commands.add('checkLoginPartAndPrivacySection', () => {
  cy.get('[data-cy=login-wrapper]')
    .should('contain', 'Have an account?')
    .find('[data-cy=login]')
    .should('contain', 'Sign In')
    .should('have.attr', 'href')
    .and('contain', '/login');
  cy.get('[data-cy=policy-wrapper]')
    .should('contain', 'By signing up, you agree to the')
    .find('[data-cy=policy]')
    .should('contain', 'Privacy Policy')
    .should('contain', 'Terms of Service.')
    .should('have.attr', 'href')
    .and('contain', '/privacy');
  cy.get('[data-cy=policy-wrapper]')
    .find('[data-cy=policy]')
    .click();
  cy.checkPrivacyPage();
});
Cypress.Commands.add('checkPrivacyPage', async () => {
  cy.url().should('include', '/privacy');
  cy.get('[data-cy=page-title]').contains('Privacy Policy | The Good Party');
  const content = await promisify(
    cy.getCMSContent().then(response => response.body),
  );
  cy.get('[data-cy=title]').contains(content.privacyPage.title);
  cy.get('[data-cy=last-revisioin-label]').contains('Last Revision');
  cy.get('[data-cy=last-revisioin-date]').contains(
    dateUsHelper(content.privacyPage.lastModified),
  );
});
Cypress.Commands.add('checkEmailRegisterPage', () => {
  const email = Cypress.env('email');
  const fullName = Cypress.env('fullName');

  cy.url().should('include', '/you/register-email');
  cy.get('[data-cy=page-title]').contains('Register to the Good Party');
  cy.get('[data-cy=title]').contains('Join The Good Party');
  cy.get('[data-cy=description]').contains(
    'Please enter your info, so we can count your support and notify you as we make progress.',
  );
  cy.get('[data-cy=full-name]')
    .find('label')
    .should('contain', 'Full Name');
  cy.get('[data-cy=full-name]')
    .find('p')
    .should('contain', 'We will never show your full name on our site.');
  cy.get('[data-cy=email]')
    .find('label')
    .should('contain', 'Email');
  cy.get('[data-cy=email]')
    .find('p')
    .should(
      'contain',
      'We will never share or sell your information for any reason',
    );
  cy.get('[data-cy=password]')
    .find('p')
    .should('contain', '8 characters minimum');
  cy.get('[data-cy=submit]')
    .find('button')
    .should('have.attr', 'disabled')
    .and('contain', 'disabled');
  // check login confirm page
  cy.get('[data-cy=login-wrapper]').should(
    'contain',
    'Already have an account?',
  );
  cy.get('[data-cy=login-link]')
    .contains('Login')
    .should('have.attr', 'href')
    .and('contain', '/login');
});
