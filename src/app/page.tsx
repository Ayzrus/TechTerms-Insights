"use client";
import TermDefinition from "@/app/components/termos";
import { motion } from "framer-motion";
import Texto from "@/app/components/texto";

const terms = [
  {
    term: "Soft skills",
    definition:
      "Habilidades interpessoais que incluem comunicação, empatia, trabalho em equipe e resolução de problemas.",
    id: "SS",
    image: "./images/ss.jpg",
  },
  {
    term: "CRM",
    definition:
      "Sistema para gestão de relação com clientes, ajudando a melhorar as vendas, marketing e serviço ao cliente.",
    id: "CRM",
    image: "./images/crm.jpg",
  },
  {
    term: "ERP",
    definition:
      "Sistema integrado que gerencia processos de negócio, como contabilidade, compras e produção.",
    id: "ERP",
    image: "./images/erp.jpg",
  },
  {
    term: "MES",
    definition:
      "Sistema que controla e monitora o processo de produção em tempo real.",
    id: "MES",
    image: "./images/mes.jpg",
  },
  {
    term: "SCM",
    definition:
      "Gestão da cadeia de fornecimento, desde a produção até a entrega do produto ao consumidor final.",
    id: "SCM",
    image: "./images/scm.jpg",
  },
  {
    term: "WMS",
    definition: "Sistema para gerenciar operações de armazém e estoque.",
    id: "WMS",
    image: "./images/wms.jpg",
  },
  {
    term: "HRM",
    definition:
      "Gestão de recursos humanos, incluindo recrutamento, formação e desenvolvimento dos colaboradores.",
    id: "HRM",
    image: "./images/hrm.jpg",
  },
  {
    term: "Big Data",
    definition:
      "Conjunto de dados muito grandes ou complexos para serem tratados por métodos tradicionais, exigindo técnicas avançadas de análise.",
    id: "BigData",
    image: "./images/bigdata.jpg",
  },
  {
    term: "Cybersecurity",
    definition:
      "Prática de proteger sistemas, redes e programas contra ataques digitais.",
    id: "Cybersecurity",
    image: "./images/cybersecurity.jpg",
  },
  {
    term: "IA (Inteligência Artificial)",
    definition:
      "Tecnologias que permitem que máquinas imitem a inteligência humana, como aprendizado e tomada de decisões.",
    id: "IA",
    image: "./images/ia.jpg",
  },
  {
    term: "IoT (Internet of Things)",
    definition:
      "Rede de dispositivos físicos conectados à internet, que coletam e compartilham dados.",
    id: "IoT",
    image: "./images/iot.jpg",
  },
  {
    term: "IIoT (Industrial Internet of Things)",
    definition:
      "Aplicativo da IoT no setor industrial para melhorar a eficiência e reduzir custos.",
    id: "IIoT",
    image: "./images/iiot.jpg",
  },
  {
    term: "AR (Augmented Reality)",
    definition:
      "Tecnologia que sobrepõe elementos digitais ao mundo real, melhorando a experiência do usuário.",
    id: "AR",
    image: "./images/ar.jpg",
  },
  {
    term: "VR (Virtual Reality)",
    definition:
      "Simulação de um ambiente tridimensional totalmente virtual, permitindo a imersão do usuário.",
    id: "VR",
    image: "./images/vr.jpg",
  },
  {
    term: "B2B (Business to Business)",
    definition: "Transações comerciais entre empresas.",
    id: "B2B",
    image: "./images/b2b.jpg",
  },
  {
    term: "B2C (Business to Consumer)",
    definition: "Transações comerciais entre empresas e consumidores finais.",
    id: "B2C",
    image: "./images/b2c.jpg",
  },
  {
    term: "H2H (Human to Human)",
    definition:
      "Enfoque de negócios que valoriza a conexão humana em todas as interações comerciais.",
    id: "H2H",
    image: "./images/h2h.jpg",
  },
  {
    term: "NFC (Near Field Communication)",
    definition:
      "Tecnologia de comunicação sem fio de curto alcance, usada para pagamentos e transferências de dados.",
    id: "NFC",
    image: "./images/nfc.jpg",
  },
  {
    term: "RFID (Radio Frequency Identification)",
    definition:
      "Tecnologia que utiliza ondas de rádio para identificar e rastrear objetos.",
    id: "RFID",
    image: "./images/rfid.jpg",
  },
  {
    term: "Bar Code",
    definition:
      "Código de barras, uma representação visual de dados legível por máquinas, usado para identificar produtos.",
    id: "BarCode",
    image: "./images/barcode.jpg",
  },
  {
    term: "QR Code",
    definition:
      "Código de resposta rápida, que pode armazenar mais informações do que o código de barras e ser lido por smartphones.",
    id: "QRCode",
    image: "./images/qrcode.jpg",
  },
  {
    term: "Blockchain",
    definition:
      "Tecnologia de registro distribuído que garante a segurança e transparência das transações digitais.",
    id: "Blockchain",
    image: "./images/blockchain.jpg",
  },
  {
    term: "Data Science",
    definition:
      "Campo que utiliza métodos científicos, processos e sistemas para extrair informações de dados estruturados e não estruturados.",
    id: "DataScience",
    image: "./images/datascience.jpg",
  },
  {
    term: "Cloud Computing",
    definition:
      "Uso de servidores remotos na internet para armazenar, gerenciar e processar dados, em vez de um servidor local ou um computador pessoal.",
    id: "CloudComputing",
    image: "./images/cloudcomputing.jpg",
  },
  {
    term: "Deep Learning",
    definition:
      "Subconjunto de aprendizado de máquina que utiliza redes neurais artificiais para modelar e resolver problemas complexos.",
    id: "DeepLearning",
    image: "./images/deeplearning.jpg",
  },
];

export default function Home() {
  return (
    <div className="pt-[70px] flex justify-center ml-2 mt-2 flex-col items-center">
      {/* Grid de Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {terms.map((term) => (
          <TermDefinition
            key={term.id}
            term={term.term}
            definition={term.definition}
            id={term.id}
            image={term.image}
          />
        ))}
      </motion.div>

      {/* Texto abaixo dos cards */}
      <motion.div
        className="mt-10 px-4 py-6 max-w-4xl mx-auto rounded-lg shadow-lg text-lg text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      >
        <Texto />
      </motion.div>
    </div>
  );
}
