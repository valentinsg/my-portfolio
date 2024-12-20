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
import { useLanguage } from '../context/LanguageProvider';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const { isSpanish } = useLanguage();

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
        title: isSpanish ? "Error" : "Error",
        description: isSpanish ? "Por favor completa todos los campos requeridos." : "Please fill out all required fields.",
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
          title: isSpanish ? "Mensaje enviado" : "Message sent",
          description: isSpanish ? "Nos pondremos en contacto pronto." : "We will get in touch soon.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast({
          title: isSpanish ? "Error" : "Error",
          description: isSpanish ? "Hubo un error al enviar el mensaje." : "There was an error sending the message.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  // Colores para temas claro/oscuro
  const headingColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const inputBgColor = useColorModeValue('white.100', 'gray.700');
  const labelColor = useColorModeValue('gray.900', 'gray.200');

  return (
    <VStack spacing={10} align="stretch" m={{ base: 0, md: 6 }}  id={id} px={{ base: 0, md: "auto" }}>
      {/* Título del formulario */}
      <Heading size={{base: "2xl", md:"3xl"}} color={headingColor} textAlign="left" mb={{ base: 2, md: 6 }}  >
        {isSpanish ? "¡Contáctame directamente!" : "Get in Touch with Me!"}
      </Heading>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          {/* Nombre */}
          <FormControl isRequired>
            <FormLabel color={labelColor} fontFamily={"monospace"}>{isSpanish ? "Tu Nombre" : "Your Name"}</FormLabel>
            <Tooltip label={isSpanish ? "Ingresa tu nombre completo" : "Enter your full name"} placement="top">
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={isSpanish ? "Valentín Sánchez Guevara" : "Valentín Sánchez Guevara"}
                bg={inputBgColor}
                border={useColorModeValue('1px solid #ce3072', 'none')}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>

          {/* Empresa */}
          <FormControl>
            <FormLabel color={labelColor} fontFamily={"monospace"}>{isSpanish ? "Empresa" : "Company"}</FormLabel>
            <Tooltip label={isSpanish ? "Opcional: Ingresa el nombre de tu empresa" : "Optional: Enter your company name"} placement="top">
              <Input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={isSpanish ? "Busy Streetwear" : "Busy Streetwear"}
                bg={inputBgColor}
                border={useColorModeValue('1px solid #ce3072', 'none')}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>

          {/* Email */}
          <FormControl isRequired>
            <FormLabel color={labelColor} fontFamily={"monospace"}>Email</FormLabel>
            <Tooltip label={isSpanish ? "Nunca compartiré tu email" : "I'll never share your email"} placement="top">
              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="busy@example.com"
                bg={inputBgColor}
                border={useColorModeValue('1px solid #ce3072', 'none')}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>

          {/* Teléfono */}
          <FormControl>
            <FormLabel color={labelColor} fontFamily={"monospace"}>{isSpanish ? "Teléfono" : "Phone"}</FormLabel>
            <Tooltip label={isSpanish ? "Opcional: Ingresa tu número de teléfono" : "Optional: Enter your phone number"} placement="top">
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                placeholder="+1 (555) 123-4567"
                bg={inputBgColor}
                border={useColorModeValue('1px solid #ce3072', 'none')}
                _hover={{ borderColor: '#ce3072' }}
                _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}
              />
            </Tooltip>
          </FormControl>
        </Grid>

        {/* Mensaje */}
        <FormControl isRequired mt={6}>
          <FormLabel color={labelColor} fontFamily={"monospace"}>{isSpanish ? "Mensaje" : "Message"}</FormLabel>
            <Tooltip label={isSpanish ? "Contáme cómo puedo ayudarte" : "Tell me how can help you"} placement="top">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={isSpanish ? "Tu mensaje acá..." : "Your message here..."}
              bg={inputBgColor}
              border={useColorModeValue('1px solid #ce3072', 'none')}
              _hover={{ borderColor: '#ce3072' }}
              _focus={{ borderColor: '#ce3072', boxShadow: '0 0 0 1px #ce3072' }}              
              rows={8}
            />
            </Tooltip>
        </FormControl>

        {/* Botón de envío */}
        <Tooltip label={isSpanish ? "Enviar el mensaje" : "Send the message"} placement="top">
          <Button
            variant="outline"
            p={6}
            w={{base: "100%", md:"15vw"}}
            boxShadow={'md'}
            colorScheme="pink"
            size={{ base: "sm", md: "lg" }}
            fontSize={{ base: "xs", md: "md" }}
            isLoading={isSubmitting}
            type="submit"
            mt={6}
          >
            {isSubmitting ? (isSpanish ? "Enviando..." : "Sending...") : (isSpanish ? "Enviar Mensaje" : "Send Message")}
          </Button>
        </Tooltip>

      </form>
    </VStack>
  );
};

export default Contact;
