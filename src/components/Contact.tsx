/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import {
  Input,
  Textarea,
  Grid,
  FormControl,
  FormLabel,
  Heading,
  useColorModeValue,
  VStack,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import "./btn-donate.css";

const Contact = () => {
  {/* ESTADO PARA LOS DATOS DEL FORMULARIO */ }

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValid = () => {
    return formData.name && formData.email && formData.message;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    {/* VALIDAR QUE LOS CAMPOS REQUERIDOS ESTÉN LLENOS */ }

    if (!isValid()) {
      toast({
        title: "Error!",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    {/* EMAILJS: CONFIGURATION */ }

    const serviceId = 'service_giwh9l1';
    const templateId = 'template_zfkuijy';
    const userId = 'UpnhC2i2TP-flmSc-';

    {/* EMAILJS: SEND MESSAGE */ }

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setIsSubmitting(false);
        toast({
          title: "Error!",
          description: "There was an error sending the message.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  {/* MEJORAR LUEGO CON LOS THEMES PARA MODO OSCURO Y CLARO */ }
  const headingColor = useColorModeValue('#ce3072', '#ff8dc7');
  const inputBgColor = useColorModeValue('white', 'gray.700');
  const labelColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <VStack spacing={14} align="stretch" p={10} ml={-6} >
      <Heading size="3xl" color={headingColor} textAlign="left">
        Get in Touch with Me!
      </Heading>
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          <FormControl isRequired>
            <FormLabel color={labelColor} fontFamily={"monospace"}>Your Name</FormLabel>
            <Tooltip label="Enter your full name" placement="top">
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Valentín Sánchez Guevara"
                bg={inputBgColor}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>

          <FormControl>
            <FormLabel color={labelColor} fontFamily={"monospace"}>Company</FormLabel>
            <Tooltip label="Optional: Enter your company name" placement="top">
              <Input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Busy Streetwear"
                bg={inputBgColor}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>

          <FormControl isRequired>
            <FormLabel color={labelColor} fontFamily={"monospace"}>Email</FormLabel>
            <Tooltip label="I'll never share your email" placement="top">
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="busy@example.com"
                bg={inputBgColor}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>

          <FormControl>
            <FormLabel color={labelColor} fontFamily={"monospace"}>Phone</FormLabel>
            <Tooltip label="Optional: Enter your phone number" placement="top">
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                placeholder="+1 (555) 123-4567"
                bg={inputBgColor}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>
        </Grid>

        <FormControl isRequired mt={6}>
          <FormLabel color={labelColor} fontFamily={"monospace"}>Message</FormLabel>
          <Tooltip label="Tell us how we can help you" placement="top">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message here..."
              bg={inputBgColor}
              _hover={{ borderColor: '#ce3072' }}
              _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              rows={8}
            />
          </Tooltip>
        </FormControl>

        <button
          className="btn-donate"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </VStack>
  );
};

export default Contact;