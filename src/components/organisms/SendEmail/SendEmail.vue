<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import Button from "primevue/button";
import InputWithValidation from "../../molecules/InputWithValidation/InputWithValidation.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { sendEmail, SendEmail } from "@/services/emailjs/sendEmail/send-email";

const namePlaceholder = ref("What's Your Name");
const emailPlaceholder = ref("Your e-mail");
const subjectPlaceholder = ref("Tell me about your project");

const updatePlaceholder = () => {
  const isMobileWidth = window.innerWidth < 407;
  const isTabletWidth = window.innerWidth >= 407 && window.innerWidth < 587;
  const isDeskWidth = window.innerWidth > 587;

  namePlaceholder.value = isTabletWidth
    ? "Your Name"
    : (namePlaceholder.value = isDeskWidth ? "What's Your Name" : "Name");
  emailPlaceholder.value = isMobileWidth ? "E-mail" : "Your e-mail";
  subjectPlaceholder.value = isMobileWidth
    ? "About Your Project"
    : "Tell me About Your Project";
};

const schema = yup.object({
  name: yup.string().max(80, "Maximum 80 characters").required(" "),
  email: yup.string().max(255, "Maximum 255 characters").required(" ").email(),
  subject: yup.string().max(255, "Maximum 255 characters").required(" "),
});

const { handleSubmit, setValues } = useForm({
  initialValues: {
    name: "",
    email: "",
    subject: "",
  },
  validationSchema: schema,
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const data: SendEmail = {
      name: values.name,
      email: values.email,
      subject: values.subject,
    };

    await sendEmail(data);
    setValues({ name: "", email: "", subject: "" });
  } catch (error) {
    console.error("Error sending e-mail:", error);
    error.value = "An error occurred while sending the e-mail.";
  }
});

onMounted(() => {
  updatePlaceholder();
  window.addEventListener("resize", updatePlaceholder);
});

onUnmounted(() => {
  window.removeEventListener("resize", updatePlaceholder);
});
</script>

<template>
  <div class="flex-grow">
    <div
      class="send-email-wrapper w-full h-96 flex flex-row px-16 gap-12 mt-20"
    >
      <div class="lets-wrapper w-3/12">
        <p class="lets-talk">Let’s Talk</p>
      </div>
      <div class="form-wrapper flex flex-col h-full justify-between w-9/12">
        <div class="flex flex-row gap-12 justify-between">
          <InputWithValidation
            class="w-3/6"
            name="name"
            :placeholder="namePlaceholder"
          />
          <InputWithValidation
            class="w-3/6"
            name="email"
            :placeholder="emailPlaceholder"
          />
        </div>
        <InputWithValidation name="subject" :placeholder="subjectPlaceholder" />
        <Button @click="onSubmit" class="p-button-send">Send E-mail</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}

.lets-talk {
  color: #222;
  font-size: 50px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 58.7px;
  word-wrap: break-word;
}

footer {
  margin-top: auto;
}

.p-button-send {
  width: 137.8px;
  height: 40px;
  background-color: #222 !important;
  color: white;
  border: none !important;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 36px;
  word-wrap: break-word;
  border: none;
  transition: all 0.9s;
  align-items: center;
  border-radius: 30px;
  justify-content: center;

  &:hover {
    background-color: #222222d2 !important;
    border: none !important;
  }

  &:focus,
  &:active,
  &:focus {
    background-color: #222 !important;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #222222d2, 0 1px 2px 0 #222222d2;
  }
}

@media (max-width: 350px) {
  .lets-talk {
    font-size: 40px;
  }
}

@media (max-width: 500px) {
  .send-email-wrapper {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media (max-width: 790px) {
  .send-email-wrapper {
    flex-direction: column;
  }

  .lets-wrapper {
    width: 100%;
  }

  .form-wrapper {
    width: 100%;
  }
}
</style>
