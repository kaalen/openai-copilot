// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "Describe Avanade's capability and experience in designing, building, migrating, and operating Azure Data and Integration Platform.", value: "Describe Avanade's capability and experience in designing, building, migrating, and operating Azure Data and Integration Platform." },
    { text: "Provide detailed description of the benefits of Avanade's methodology and frameworks for Azure Data and Integration Platform design, implementation, application migration and operations. ", value: "Provide detailed description of the benefits of Avanade's methodology and frameworks for Azure Data and Integration Platform design, implementation, application migration and operations. " },
    { text: "Describe high-level solution architecture for the proposed Azure Data and Integration platform.", value: "Describe high-level solution architecture for the proposed Azure Data and Integration platform." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
