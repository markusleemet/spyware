import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

const BACKEND_URL = "http://localhost:8080/contact";

export const useContactStore = defineStore("contacts", () => {
  const contacts = ref([]);
  const isCreating = ref(false);
  const isFetching = ref(true);
  const showSuccessToast = ref(false);
  const showErrorToast = ref(false);
  const newContact = ref({
    name: null,
    secretName: null,
    phoneNumber: null,
  });

  function fetchAll() {
    axios
      .get(BACKEND_URL)
      .then(({ data }) => {
        contacts.value = data;
      })
      .catch(() => {
        showErrorToast.value = true;
      })
      .finally(() => {
        isFetching.value = false;
      });
  }

  function resetContactForm() {
    Object.keys(newContact.value).forEach((key) => {
      newContact.value[key] = null;
    });
  }

  function createContact() {
    isCreating.value = true;

    return axios
      .post(BACKEND_URL, newContact.value)
      .then((contact) => {
        contacts.value.push(contact);
        showSuccessToast.value = true;
        return Promise.resolve();
      })
      .catch(() => {
        showErrorToast.value = true;
        return Promise.reject();
      })
      .finally(() => {
        resetContactForm();
        isCreating.value = false;
      });
  }

  return {
    contacts,
    fetchAll,
    createContact,
    isCreating,
    isFetching,
    newContact,
    showSuccessToast,
    showErrorToast,
  };
});
