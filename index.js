require('dotenv').config()
const nodemailer = require('nodemailer')

let user = process.env.USER
let pass = process.env.PASS
let to = process.env.TO
let subject = process.env.SUBJECT
let html = `
<html lang="pt-BR">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Confirmação de Recebimento</title>
</head>
<body>
	<div class="container">
		<div class="header">
			<img src="https://sirius.softclever.com.br/_next/static/media/logo_azul.6d478aad.svg" alt="Logo da Empresa" />
			<h1>Obrigado por Entrar em Contato!</h1>
		</div>
		<div class="content">
			<p>
				A Soft Clever desenvolve sistemas de gestão empresarial para empresas de todos os tipos e tamanhos em todo o território nacional. Atendemos o varejo, atacado, distribuição, indústria e serviços de micro,
				pequeno e médio porte e somos indicados por centenas de contabilidades aos seus clientes. A nossa base de dados conta com mais de 12.000 usuários atendidos desde 1994 e nosso suporte é humanizado (aqui você não
				conversa com um robô). Temos vasta experiência na emissão de documentos fiscais, mas não limitado a isso. Veja as soluções que temos para impulsionar o seu negócio;
			</p>
			<ul>
				<li>
					<p>Sírius SAT/NFC-e - Para todo o tipo e porte de comércio varejista.</p>
					<p>Emissor de cupom fiscal eletrônico com controle de estoque, controle de caixa, troca de mercadoria , financeiro, compras, relatórios gerenciais e afins.</p>
				</li>
				<li>
					<p>Sírius Pré Venda - Para todo o tipo e porte de comércio varejista.</p>
					<p>Emissor de pedido de venda sem valor fiscal com controle de estoque, controle de caixa, troca de mercadoria , financeiro, compras, relatórios gerenciais afins.</p>
				</li>
				<li>
					<p>Sírius NF-e - Emissor de nota fiscal eletrônica NF-e.</p>
					<p>Emissor de NF-e descomplicado com atribuições automáticas de CFOP's, CST's e NCM's. Sua nota fiscal calculada automaticamente em instantes.</p>
				</li>
				<li>
					<p>Sírius ERP - Sistema de Gestão Empresarial.</p>
					<p>
						O melhor custo x benefício do mercado para a gestão da sua empresa ! Notas fiscais(NF-e), MDF-e, controle de estoque, controle comercial, força de vendas (pedidos on line), pedidos de vendas (interno),
						liberação e expedição de pedidos, comissões, financeiro a pagar e a receber, cobrança e conciliação bancária, fluxo de caixa, compras de mercadorias, entrada de mercadorias por XML, curvas ABC, DRE,
						controle de produção, Sped Fiscal e uma ampla gama de relatórios e ferramentas.
					</p>
				</li>
			</ul>

			<p>
				As nossas soluções podem ser utilizadas separadamente ou em conjunto e são escalonáveis, ou seja, você começa contratando somente aquilo que precisa no momento e, a medida que a sua empresa cresce, você amplia
				o seu plano. Temos um pacote que cabe no seu bolso. As nossas soluções foram desenvolvidas para atender aos mais diversos segmentos do mercado. Veja abaixo alguns de nossos clientes;
			</p>
			<ul class="columns-2">
				<li class="mb-3">
					<div>
						<p>Brasmix</p>
						<p>Importação e comércio de revestimentos.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>PortoFino</p>
						<p>Comércio de revestimentos.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Queridinha do Brás</p>
						<p>Comércio de roupas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Ponto do Padeiro</p>
						<p>Comércio de acessórios voltados ao setor de alimentação.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Binneli</p>
						<p>Comércio de tecidos e artigos para tapeçaria.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Art Venite</p>
						<p>Comércio de revestimentos.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Lojas Prolar</p>
						<p>Comércio de tecidos e artigos para tapeçaria.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Armazém Espumas</p>
						<p>Comércio de espumas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Armazém da Luz</p>
						<p>Comércio de artigos relacionados a iluminação.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>CooperPeças</p>
						<p>Comércio e distribuidora de peças automotivas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Euroville</p>
						<p>Comércio de revestimentos.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Filitex</p>
						<p>Indústria e Comércio de Malhas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Anjotex</p>
						<p>Confecção de roupas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Belavini</p>
						<p>Confecção de roupas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Lira Equipamentos</p>
						<p>Indústria de máquinas.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Buker Engrenagens</p>
						<p>Indústria pesada.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Pontual</p>
						<p>Indústria e Comércio de Móveis.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Aia</p>
						<p>Indústria de embalagens.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Pontual Polímeros</p>
						<p>Indústria de transformação.</p>
					</div>
				</li>
				<li class="mb-3">
					<div>
						<p>Bax</p>
						<p>Indústria e comércio de artigos para festas.</p>
					</div>
				</li>
			</ul>
			<p>
				Repare que atendemos clientes dos mais diversos segmentos, dentre eles: lojas de revestimentos, roupas, acessórios, calçados, presentes, auto peças, entre outras, além de setores mais específicos como óticas,
				pet shops, adegas, food service e afins. Nossas soluções também possuem recursos avançados voltados a todo o tipo de empresa que atua no atacado, distribuição e industrialização. A lista acima representa uma
				minúscula fração dos nossos clientes. Fale com o nosso departamento comercial e solicite um orçamento ou demonstração sem compromisso.
			</p>

			<p>Assista a reportagem gravada em nossas instalações e exibidas na BandNews:</p>

			<p>
				<a href="">Linda da reportagem</a>
			</p>

			<p>Assista a apresentação dos nossos produtos e serviços:</p>

			<p>
				<a href="">Linda da reportagem</a>
			</p>
			<p>Saiba mais em: <a href="https://www.softclever.com.br">www.softclever.com.br</a></p>
		</div>
		<div class="footer">
			<p>&copy; 2024 SoftClever. Todos os direitos reservados.</p>
		</div>
	</div>
	<style>
		body {
			font-family: Arial, sans-serif;
			line-height: 1.6;
			color: #003658;
			background-color: #f7f7f7;
			padding: 20px;
		}
		.container {
			background-color: #fff;
			padding: 20px;
			border-radius: 8px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			max-width: 600px;
			margin: 0 auto;
		}
		.header {
			text-align: center;
			margin-bottom: 20px;
		}
		.header img {
			max-width: 100px;
		}
		.content {
			text-align: left;
		}
		.footer {
			text-align: center;
			margin-top: 20px;
			font-size: 0.9em;
			color: #809bab;
		}
		.mb-3 {
			margin-bottom: 0.5rem;
		}
	</style>
</body>
</html>

`

async function send(user, pass, to, subject, html) {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.office365.com',
			port: 587,
			secure: false,
			auth: {
				user,
				pass,
			},
		})

		const mailOptions = { from: user, to, subject, html }

		let test = await transporter.sendMail(mailOptions)
		return test
	} catch (error) {
		console.error(error)
		return error
	}
}

send(user, pass, to, subject, html)
