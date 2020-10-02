'use strict';

const homeRedImage = document.querySelector('#homeRedImage');
const homeGreenImage = document.querySelector('#homeGreenImage');
const homeRedImageLabel = document.querySelector('#homeRedImageLabel');
const homeGreenImageLabel = document.querySelector('#homeGreenImageLabel');

gsap.registerPlugin(ScrollTrigger);

if (
  homeRedImage
  && homeGreenImage
  && homeRedImageLabel
  && homeGreenImageLabel
) {
  const tlLoad = gsap.timeline({
    ease: 'Sine.easeOut',
    duration: 1.5,
  });

  tlLoad
    .from(
      homeRedImage,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: -70,
        y: 25,
      },
      '-=1.5'
    )
    .from(
      homeGreenImage,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: 70,
        y: 25,
      },
      '-=1.5'
    )
    .from(
      homeRedImageLabel,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: -125,
      },
      '-=1.5'
    )
    .from(
      homeGreenImageLabel,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: 125,
      },
      '-=1.5'
    );

  const tlScrolling = gsap.timeline({
    scrollTrigger: {
      trigger: homeRedImage,
      toggleActions: 'restart none reverse none',
      start: '40px 10%',
      end: '100% 15%',
      scrub: 1,
    },
    ease: 'Sine.easeOut',
    duration: 1.5,
  });

  tlScrolling
    .to(
      homeRedImage,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: -70,
        y: 25,
      },
      '-=1.5'
    )
    .to(
      homeGreenImage,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: 70,
        y: 25,
      },
      '-=1.5'
    )
    .to(
      homeRedImageLabel,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: -125,
      },
      '-=1.5'
    )
    .to(
      homeGreenImageLabel,
      {
        ease: 'Sine.easeOut',
        duration: 1.5,
        x: 125,
      },
      '-=1.5'
    );
}

const regularTitleList = document.querySelectorAll(
  '.title-block--regular .title-block__quote'
);
const darkGreenTitleList = document.querySelectorAll(
  '.title-block--dark-green .title-block__quote'
);
const lightGreenTitleList = document.querySelectorAll(
  '.title-block--light-green .title-block__quote'
);

const preparedTitleList = [
  ...regularTitleList,
  ...darkGreenTitleList,
  ...lightGreenTitleList,
];

preparedTitleList.forEach((quotes, index) => {
  const tlQuotes = gsap.timeline({
    scrollTrigger: {
      trigger: quotes,
      toggleActions: 'restart none reverse none',
    },
  });

  tlQuotes.from(quotes, {
    x: (index + 1) % 2 !== 0 ? -50 : 50,
    y: -15,
    duration: 1,
    opacity: 0,
  });
});

const listOfPicturesToAnimate = document.querySelectorAll(
  '.picture-block__image--desktop.picture-animation'
);

listOfPicturesToAnimate.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
      toggleActions: 'restart none reverse none',
      start: '0 90%',
      end: '90% 0',
      scrub: 1,
    },
    duration: 2,
    ease: 'Sine.easeOut',
    scale: 1.2,
  });
});

const listOfMobilePicturesToAnimate = document.querySelectorAll(
  '.picture-block__image--mobile.picture-animation'
);

listOfMobilePicturesToAnimate.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
      toggleActions: 'restart none reverse none',
      start: '0 90%',
      end: '90% 0',
      scrub: 1,
    },
    duration: 2,
    ease: 'Sine.easeOut',
    scale: 1.2,
  });
});

const topFullWidthPictureList = document.querySelectorAll(
  '.picture-block__image--desktop.top-picture-animation'
);

if (topFullWidthPictureList.length > 0) {
  topFullWidthPictureList.forEach((picture) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(picture, {
      scale: 1.2,
      duration: 1.5,
      ease: 'sine.inOut',
    });

    tl.reverse(1.5);

    const timeout = gsap.delayedCall(1.5, () => {
      ScrollTrigger.create({
        trigger: picture,
        toggleActions: 'play none reverse none',
        start: '0 15%',
        end: '100% 0',
        scrub: 1,
        animation: tl,
      });
    });
  });
}

const topFullWidthMobilePictureList = document.querySelectorAll(
  '.picture-block__image--mobile.top-picture-animation'
);

if (topFullWidthMobilePictureList.length > 0) {
  topFullWidthMobilePictureList.forEach((picture) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(picture, {
      scale: 1.2,
      duration: 1.5,
      ease: 'sine.inOut',
    });

    tl.reverse(1.5);

    const timeout = gsap.delayedCall(1.5, () => {
      ScrollTrigger.create({
        trigger: picture,
        toggleActions: 'play none reverse none',
        start: '0 15%',
        end: '100% 0',
        scrub: 1,
        animation: tl,
      });
    });
  });
}
