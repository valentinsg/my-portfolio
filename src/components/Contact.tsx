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
  Button
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';
import "./btn-donate.css";

const Contact = () => {

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  // Manejar los cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validar campos requeridos
  const isValid = () => {
    return formData.name && formData.email && formData.message;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificar que los campos requeridos estén llenos
    if (!isValid()) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setIsSubmitting(true);

    // Configuración de EmailJS
    const serviceId = 'service_giwh9l1';
    const templateId = 'template_zfkuijy';
    const userId = 'UpnhC2i2TP-flmSc-';

    // Enviar correo con EmailJS
    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        setIsSubmitting(false);
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto pronto.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast({
          title: "Error",
          description: "Hubo un error al enviar el mensaje.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  // Colores para temas claro/oscuro
  const headingColor = useColorModeValue('#ff8dc7', '#fff');
  const inputBgColor = useColorModeValue('white', 'gray.700');
  const labelColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <VStack spacing={10} align="stretch" p={10}>
      {/* Título del formulario */}
      <Heading size="3xl" color={headingColor} textAlign="left">
        Get in Touch with Me!
      </Heading>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          {/* Nombre */}
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

          {/* Empresa */}
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

          {/* Email */}
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

          {/* Teléfono */}
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

        {/* Mensaje */}
        <FormControl isRequired mt={6}>
          <FormLabel color={labelColor} fontFamily={"monospace"}>Message</FormLabel>
          <Tooltip label="Tell me how can help you" placement="top">
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

        {/* Botón de envío */}
        <Button
          mt={6}
          size="lg"
          colorScheme="pink"
          bg="#ce3072"
          isLoading={isSubmitting}
          type="submit"
          _hover={{
            bg: "#ff8dc7",
          }}
          width="100%"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

      </form>
    </VStack>
  );
};

export default Contact;
