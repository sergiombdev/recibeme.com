import CodeMirror from "@uiw/react-codemirror";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { javascript } from "@codemirror/lang-javascript";

import { ContainerPage } from './styles';

export const Services = ({ url, method, headers, example, response, description, body }) => (
	<ContainerPage>
		<p>
			{method}: <b>{url}</b>
		</p>
		<hr/>
		<p>Descripción:</p>
		<p>- {description}</p>

		{
			body !==""?<p>Body:</p>:null
		}

		<p dangerouslySetInnerHTML={{__html: body}}></p>
		<p>Ejemplo:</p>
		<CodeMirror
			value={example}
			height="auto"
			editable={false}
			theme={sublime}
			extensions={[javascript({ jsx: true })]}
		/>

		<p>Respuesta:</p>

		<CodeMirror
			value={response}
			height="auto"
			editable={false}
			theme={sublime}
			extensions={[javascript({ jsx: true })]}
		/>
	</ContainerPage>
);
