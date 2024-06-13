import { defineStore } from 'pinia';

export const useProfileStore = defineStore(
  'profile',
  {
    state: () => ({
      name:
        localStorage.getItem('name') || '하승범',
      email:
        localStorage.getItem('email') ||
        'changil01@gmail.com',
      gender:
        localStorage.getItem('gender') || 'male',
      birthdate: {
        year:
          localStorage.getItem('birthYear') ||
          '1998',
        month:
          localStorage.getItem('birthMonth') ||
          '8',
        day:
          localStorage.getItem('birthDay') ||
          '18',
      },
      phonenumber:
        localStorage.getItem('phonenumber') ||
        '010-2934-9650',
    }),
    actions: {
      updateProfile(profile) {
        this.name = profile.name;
        this.email = profile.email;
        this.gender = profile.gender;
        this.birthdate = profile.birthdate;
        this.phonenumber = profile.phonenumber;

        // Save to localStorage
        localStorage.setItem(
          'name',
          profile.name
        );
        localStorage.setItem(
          'email',
          profile.email
        );
        localStorage.setItem(
          'gender',
          profile.gender
        );
        localStorage.setItem(
          'birthYear',
          profile.birthdate.year
        );
        localStorage.setItem(
          'birthMonth',
          profile.birthdate.month
        );
        localStorage.setItem(
          'birthDay',
          profile.birthdate.day
        );
        localStorage.setItem(
          'phonenumber',
          profile.phonenumber
        );
      },
    },
  }
);
