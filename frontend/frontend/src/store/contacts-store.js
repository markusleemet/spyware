import { defineStore } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";

const BACKEND_URL = "http://localhost:8080/contact";

export const useContactStore = defineStore("contacts", () => {
  const contacts = ref([]);
  const newContact = ref({
    name: null,
    secretName: null,
    phoneNumber: null,
  });

  const isCreating = ref(false);
  const isFetching = ref(true);

  const showSuccessToast = ref(false);
  const showErrorToast = ref(false);

  const searchType = ref("name");
  const searchValue = ref("");

  const filteredContacts = computed(() => {
    return contacts.value.filter((contact) =>
      contact[searchType.value]
        .toLowerCase()
        .includes(searchValue.value.toLowerCase())
    );
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

  function deleteContact(id) {
    axios
      .delete(`${BACKEND_URL}/${id}`, {})
      .then(() => {
        contacts.value = contacts.value.filter((contact) => contact.id !== id);
      })
      .catch(() => {
        showErrorToast.value = true;
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
      .then(({ data }) => {
        contacts.value.splice(0, 0, data);
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
    deleteContact,
    isCreating,
    isFetching,
    newContact,
    showSuccessToast,
    showErrorToast,
    searchValue,
    searchType,
    filteredContacts,
  };
});
