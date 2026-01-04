export const ACCOUNT_TYPE_ARRAY = [
  { key: 1, value: 'admin' },
  { key: 2, value: 'inner' },
  { key: 3, value: 'outer' },
]

export const AGENT_TYPE_ARRAY = [
  { key: 1, value: 'export_declaration' },
  { key: 2, value: 'import_declaration' },
  { key: 3, value: 'storage' },
  { key: 4, value: 'loading' },
  { key: 5, value: 'unloading' },
]

export const APPROVAL_NODE_TYPE_ARRAY = [
  { key: 1, value: 'start' },
  { key: 2, value: 'process' },
  { key: 3, value: 'end' },
]

export const APPROVAL_PROCESS_DESIGN_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'submit' },
]

export const APPROVAL_PROCESS_STATUS_ARRAY = [
  { key: 1, value: 'approval_task_draft' },
  { key: 2, value: 'approval_task_pending' },
  { key: 3, value: 'approval_task_in' },
  { key: 4, value: 'approval_task_completed' },
  { key: 5, value: 'approval_task_canceled' },
]

export const APPROVAL_RULE_ARRAY = [
  { key: 1, value: 'one_vote' },
  { key: 2, value: 'compete' },
  { key: 3, value: 'most_vote' },
]

export const APPROVAL_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'pending' },
  { key: 3, value: 'in' },
  { key: 4, value: 'approval_refuse' },
  { key: 5, value: 'pass' },
]

export const APPROVAL_TASK_NODE_STATUS_ARRAY = [
  { key: 1, value: 'approval_task_node_pending' },
  { key: 2, value: 'processed' },
  { key: 3, value: 'waiver' },
  { key: 4, value: 'copy' },
]

export const APPROVER_ARRAY = [
  { key: 1, value: 'undetermined' },
  { key: 2, value: 'role' },
  { key: 3, value: 'department' },
  { key: 4, value: 'people' },
]

export const AREA_LEVEL_ARRAY = [
  { key: 1, value: 'state' },
  { key: 2, value: 'province' },
  { key: 3, value: 'city' },
  { key: 4, value: 'area_area' },
  { key: 5, value: 'port' },
  { key: 6, value: 'continent' },
]

export const ARITHMETIC_PARAMETER_TYPE_ARRAY = [
  { key: 1, value: 'parameter' },
  { key: 2, value: 'result' },
]

export const ATTENDEES_TYPE_ARRAY = [
  { key: 1, value: 'president' },
  { key: 2, value: 'participants' },
  { key: 3, value: 'cc_to' },
]

export const ATTRIBUTABLE_BUDGET_ARRAY = [
  { key: 1, value: 'belong_budget' },
  { key: 2, value: 'belong_conception' },
]

export const AUXILIARY_IDENTIFIER_ARRAY = [
  { key: 1, value: 'opportunity' },
  { key: 2, value: 'order' },
  { key: 3, value: 'inquiry' },
  { key: 4, value: 'service' },
  { key: 5, value: 'project' },
]

export const AUXILIARY_IDENTIFIER_TYPE_ARRAY = [
  { key: 1, value: 'goods_number' },
  { key: 2, value: 'price' },
  { key: 3, value: 'quantity' },
  { key: 4, value: 'currency' },
  { key: 5, value: 'counterparty' },
  { key: 6, value: 'shipping_method' },
]

export const AVATAR_TYPE_ARRAY = [
  { key: 1, value: 'system' },
  { key: 2, value: 'image' },
  { key: 3, value: 'empty' },
]

export const BUDGET_STATUS_ARRAY = [
  { key: 2, value: 'executed' },
  { key: 3, value: 'executing' },
  { key: 4, value: 'executed_completed' },
  { key: 5, value: 'settlement_completed' },
  { key: 6, value: 'closed' },
  { key: 7, value: 'canceled' },
]

export const BUDGET_TASK_DEPENDENCY_ARRAY = [
  { key: 1, value: 'FS' },
  { key: 2, value: 'FF' },
  { key: 3, value: 'SF' },
  { key: 4, value: 'SS' },
]

export const BUDGET_TASK_OFFSET_TYPE_ARRAY = [
  { key: 1, value: 'no_offset' },
  { key: 2, value: 'in_advance' },
  { key: 3, value: 'delay' },
]

export const BUDGET_TASK_STATUS_ARRAY = [
  { key: 1, value: 'not_active' },
  { key: 2, value: 'unexecuted' },
  { key: 3, value: 'executing' },
  { key: 4, value: 'completed' },
  { key: 5, value: 'suspend' },
  { key: 6, value: 'canceled' },
]

export const BUDGET_TASK_TYPE_ARRAY = [
  { key: 1, value: 'budget_task' },
  { key: 2, value: 'order_task' },
  { key: 3, value: 'processing_task' },
  { key: 4, value: 'logistics_task' },
  { key: 5, value: 'test_task' },
  { key: 6, value: 'agent_task' },
  { key: 7, value: 'shipping_task' },
  { key: 8, value: 'insurance_task' },
  { key: 9, value: 'bank_task' },
  { key: 10, value: 'sales_task' },
  { key: 11, value: 'other_task' },
  { key: 12, value: 'opportunity_deal' },
  { key: 13, value: 'service_deal' },
  { key: 14, value: 'contract' },
  { key: 15, value: 'service_operate' },
  { key: 16, value: 'settle' },
  { key: 17, value: 'logistics_instruction_task' },
  { key: 18, value: 'logistics_entrust_task' },
  { key: 19, value: 'test_entrust_task' },
  { key: 20, value: 'agent_entrust_task' },
  { key: 21, value: 'shipping_entrust_task' },
  { key: 22, value: 'transfer_rights' },
  { key: 23, value: 'processing_entrust_task' },
  { key: 24, value: 'insurance_entrust_task' },
  { key: 25, value: 'bank_entrust_task' },
  { key: 26, value: 'sales_entrust_task' },
  { key: 27, value: 'close_task' },
]

export const BUDGET_TRANSACTION_TYPE_ARRAY = [
  { key: 1, value: 'budget_order' },
  { key: 2, value: 'budget_opportunity' },
  { key: 3, value: 'budget_assume' },
]

export const BUYER_OR_SELLER_TYPE_ARRAY = [
  { key: 1, value: 'buyer_or_seller_company' },
  { key: 2, value: 'buyer_or_seller_area' },
  { key: 3, value: 'buyer_or_seller_empty' },
]

export const BUYER_TYPE_FOR_TEST_ARRAY = [
  { key: 1, value: 'inner_company' },
  { key: 2, value: 'outer_company' },
]

export const CALCULATION_METHOD_ARRAY = [
  { key: 1, value: 'plus' },
  { key: 2, value: 'subtract' },
  { key: 3, value: 'multiply' },
  { key: 4, value: 'divide' },
]

export const CALCULATION_STANDARD_ARRAY = [
  { key: 1, value: 'arrival' },
  { key: 2, value: 'leaving' },
]

export const CHARTERING_MODE_ARRAY = [
  { key: 1, value: 'whole' },
  { key: 2, value: 'cell' },
]

export const COLLECTION_RECORDS_STATUS_ARRAY = [
  { key: 1, value: 'unclaimed' },
  { key: 2, value: 'claiming' },
  { key: 3, value: 'claimed' },
  { key: 4, value: 'write_off' },
]

export const COMMODITY_LEVEL_ARRAY = [
  { key: 1, value: 'common' },
  { key: 2, value: 'footing' },
]

export const COMMODITY_TRADE_TYPE_ARRAY = [
  { key: 1, value: 'order' },
  { key: 2, value: 'long_term' },
]

export const COMPANY_PERSONAL_TYPE_ARRAY = [
  { key: 1, value: 'company' },
  { key: 2, value: 'personal' },
]

export const CONCEPT_TYPE_ARRAY = [
  { key: 1, value: 'exposure_business' },
  { key: 2, value: 'closed_business' },
]

export const DECLARATION_TYPE_ARRAY = [
  { key: 1, value: 'export_declaration' },
  { key: 2, value: 'import_declaration' },
]

export const DECLARE_STATUS_ARRAY = [
  { key: 1, value: 'to_be_executed' },
  { key: 2, value: 'handed_over' },
  { key: 3, value: 'completed' },
  { key: 4, value: 'change' },
]

export const DEDUCT_TYPE_ARRAY = [
  { key: 1, value: 'deduct' },
  { key: 2, value: 'increase' },
]

export const DELIVERY_TERMS_ARRAY = [
  { key: 6, value: 'ex_wilding' },
  { key: 7, value: 'ex_works' },
  { key: 15, value: 'door_to_door' },
  { key: 8, value: 'free_on_board' },
  { key: 1, value: 'EXW' },
  { key: 2, value: 'FCA' },
  { key: 3, value: 'FOB' },
  { key: 4, value: 'CFR' },
  { key: 5, value: 'CIF' },
  { key: 9, value: 'CPT' },
  { key: 10, value: 'CIP' },
  { key: 11, value: 'DAT' },
  { key: 12, value: 'DAP' },
  { key: 13, value: 'DDP' },
  { key: 14, value: 'FAS' },
]

export const DESIGN_TYPE_ARRAY = [
  { key: 1, value: 'prototype' },
  { key: 2, value: 'plan' },
  { key: 3, value: 'draft' },
]

export const EFFECTIVE_SCOPE_ARRAY = [
  { key: 1, value: 'sales_transactions' },
  { key: 2, value: 'procurement_transactions' },
  { key: 3, value: 'sales_and_procurement' },
  { key: 4, value: 'budget' },
  { key: 5, value: 'inner_transactions' },
]

export const ENTRUST_STATUS_ARRAY = [
  { key: 1, value: 'to_be_entrusted' },
  { key: 2, value: 'entrusted' },
  { key: 3, value: 'canceled' },
  { key: 4, value: 'executed_completed' },
  { key: 5, value: 'executing' },
  { key: 6, value: 'entrust_completed' },
  { key: 7, value: 'settlement_completed' },
  { key: 8, value: 'closed' },
]

export const FIELD_TYPE_ARRAY = [
  { key: 1, value: 'input' },
  { key: 2, value: 'text' },
  { key: 3, value: 'date' },
  { key: 4, value: 'select' },
]

export const GENDER_ARRAY = [
  { key: 1, value: 'male' },
  { key: 2, value: 'famale' },
  { key: 3, value: 'unkown' },
]

export const GENERATE_TEMPLATE_TYPE_ARRAY = [
  { key: 1, value: 'text' },
  { key: 2, value: 'table' },
  { key: 3, value: 'cell_text' },
  { key: 4, value: 'image' },
  { key: 5, value: 'cell_image' },
  { key: 6, value: 'terms' },
  { key: 7, value: 'commodities' },
  { key: 8, value: 'new_page' },
]

export const HANDLING_MODE_ARRAY = [
  { key: 1, value: 'pickup_mode' },
  { key: 2, value: 'storehouse_mode' },
  { key: 3, value: 'filling_ton_bags_mode' },
]

export const IN_OR_OUT_ARRAY = [
  { key: 1, value: 'in_storage' },
  { key: 2, value: 'out_storage' },
]

export const IN_OR_OUT_TYPE_ARRAY = [
  { key: 1, value: 'logistics' },
  { key: 2, value: 'transfer_cargo_right' },
  { key: 3, value: 'loading' },
  { key: 4, value: 'unloading' },
]

export const INSPECTION_ARRAY = [
  { key: 4, value: 'factory' },
  { key: 2, value: 'loading_supervision' },
  { key: 3, value: 'test' },
  { key: 1, value: 'depth' },
]

export const INSURANCE_CATEGORY_ARRAY = [
  { key: 1, value: 'credit' },
  { key: 2, value: 'marine' },
]

export const INVOICE_STATUS_ARRAY = [
  { key: 1, value: 'uninvoiced' },
  { key: 2, value: 'invoiced' },
  { key: 3, value: 'mailed' },
]

export const LADING_BILL_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'confirmed' },
  { key: 3, value: 'original_bill' },
  { key: 4, value: 'cancellation_bill' },
]

export const LATITUDE_TYPE_ARRAY = [
  { key: 1, value: 'N' },
  { key: 2, value: 'S' },
]

export const LETTER_CREDIT_MODE_ARRAY = [
  { key: 1, value: 'immediately' },
  { key: 2, value: 'future' },
]

export const LOADING_RATE_TERM_ARRAY = [
  { key: 1, value: 'SHINC' },
  { key: 2, value: 'SHEXUU' },
  { key: 3, value: 'SHEXEIU' },
  { key: 4, value: 'SSHEXEIU' },
  { key: 5, value: 'CQD' },
  { key: 6, value: 'SSHEXUU' },
]

export const LOADING_TYPE_ARRAY = [
  { key: 1, value: 'start' },
  { key: 2, value: 'process' },
  { key: 3, value: 'pause' },
  { key: 4, value: 'continue' },
  { key: 5, value: 'complete' },
]
export const LOADING_UNLOADING_TYPE_ARRAY = [
  { key: 1, value: 'loading_on_board' },
  { key: 2, value: 'unload_from_boat' },
]
export const LOGIN_TYPE_ARRAY = [
  { key: 1, value: 'LOGIN' },
  { key: 2, value: 'LOGOUT' },
]
export const LOGISTICS_CHECK_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 4, value: 'confirmed' },
  { key: 5, value: 'under_review' },
  { key: 2, value: 'pass' },
  { key: 3, value: 'refuse' },
  { key: 6, value: 'checked_rollback' },
]
export const LOGISTICS_CONTROL_LEVEL_ARRAY = [
  { key: 1, value: 'pound' },
  { key: 2, value: 'inspection' },
  { key: 3, value: 'check' },
  { key: 4, value: 'destination_require' },
  { key: 5, value: 'departure_require' },
]
export const LOGISTICS_ENTRUSTMENT_FILING_STATUS_ARRAY = [
  { key: 1, value: 'unknown' },
  { key: 2, value: 'notified' },
  { key: 3, value: 'refuse' },
  { key: 4, value: 'completed' },
  { key: 5, value: 'canceled' },
]
export const LOGISTICS_INSPECTION_ARRAY = [
  { key: 1, value: 'no_inspection' },
  { key: 2, value: 'qualified' },
  { key: 3, value: 'unqualified' },
  { key: 4, value: 'partial_return' },
]
export const LOGISTICS_INSTRUCTIONS_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'unconfirmed_instructions' },
  { key: 3, value: 'accept_instructions' },
  { key: 4, value: 'send_back' },
  { key: 6, value: 'executing' },
  { key: 7, value: 'completed' },
  { key: 8, value: 'cancel_instructions' },
]
export const LOGISTICS_PROGRAMME_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'unexecuted' },
  { key: 3, value: 'executing' },
  { key: 4, value: 'completed' },
]
export const LOGISTICS_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'on_the_way' },
  { key: 3, value: 'arrive' },
  { key: 4, value: 'rejection' },
]
export const LONGITUDE_TYPE_ARRAY = [
  { key: 1, value: 'E' },
  { key: 2, value: 'W' },
]
export const LONG_TERM_FREQUENCY_ARRAY = [
  { key: 1, value: 'monthly' },
  { key: 2, value: 'day' },
  { key: 3, value: 'uncertain' },
]
export const LONG_TERM_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'unsettled' },
  { key: 3, value: 'performance' },
  { key: 4, value: 'suspend' },
  { key: 5, value: 'completed' },
  { key: 6, value: 'canceled' },
]
export const MENU_TYPE_ARRAY = [
  { key: 1, value: 'system' },
  { key: 2, value: 'module' },
  { key: 3, value: 'button' },
  { key: 4, value: 'module_child' },
]
export const MESSAGE_TYPE_ARRAY = [
  { key: 1, value: 'other_msg' },
  { key: 2, value: 'approval_msg' },
  { key: 3, value: 'task_msg' },
  { key: 4, value: 'logistics_instructions_msg' },
  { key: 5, value: 'logistics_task_msg' },
  { key: 6, value: 'test_task_msg' },
  { key: 7, value: 'agent_task_msg' },
  { key: 8, value: 'shipping_instructions_msg' },
  { key: 9, value: 'shipping_task_msg' },
  { key: 10, value: 'payment_request_msg' },
  { key: 11, value: 'collection_records_msg' },
]
export const OPPORTUNITY_SERVICE_TYPE_ARRAY = [
  { key: 1, value: 'inquiry' },
  { key: 2, value: 'pricing' },
]
export const OPPORTUNITY_SOURCE_ARRAY = [
  { key: 1, value: 'supplier_quotation' },
  { key: 3, value: 'customer_inquiry' },
  { key: 4, value: 'clue_quotation' },
  { key: 2, value: 'plan_order' },
  { key: 5, value: 'long_term' },
  { key: 6, value: 'assume' },
  { key: 7, value: 'other' },
]
export const OPPORTUNITY_STATUS_ARRAY = [
  { key: 1, value: 'unsettled' },
  { key: 2, value: 'deal' },
  { key: 3, value: 'invalid' },
  { key: 4, value: 'opp_updating' },
  { key: 5, value: 'opp_updated' },
  { key: 6, value: 'opp_cancel' },
]
export const OPPORTUNITY_TASK_STATUS_ARRAY = [
  { key: 1, value: 'executed' },
  { key: 2, value: 'executing' },
  { key: 3, value: 'finished' },
  { key: 4, value: 'canceled' },
]
export const OPPORTUNITY_TYPE_ARRAY = [
  { key: 4, value: 'offer' },
  { key: 3, value: 'bid' },
  { key: 5, value: 'counter_offer' },
  { key: 1, value: 'accept_offer' },
  { key: 6, value: 'po_confirm' },
  { key: 7, value: 'deliver_order' },
  { key: 2, value: 'other' },
]
export const OPTION_ARRAY = [
  { key: 1, value: 'buyer_option' },
  { key: 2, value: 'seller_option' },
]
export const ORDER_CONTACT_OWNER_ARRAY = [
  { key: 1, value: 'buyer' },
  { key: 2, value: 'seller' },
  { key: 3, value: 'witness' },
]
export const ORDER_INSURE_ARRAY = [
  { key: 1, value: 'cover_buyer' },
  { key: 2, value: 'cover_seller' },
]
export const ORDER_STATUS_ARRAY = [
  { key: 1, value: 'to_be_signed' },
  { key: 2, value: 'our_company_has_signed' },
  { key: 13, value: 'the_other_party_has_signed' },
  { key: 3, value: 'double_signed' },
  { key: 5, value: 'our_company_has_signed_agreement' },
  { key: 14, value: 'the_other_party_has_signed_agreement' },
  { key: 6, value: 'side_agreement_double_signed' },
  { key: 11, value: 'canceled' },
]
export const OUT_OF_DATE_ARRAY = [
  { key: 1, value: 'outdated' },
  { key: 2, value: 'usable' },
  { key: 3, value: 'out_of_date' },
]
export const PARAMETER_TYPE_ARRAY = [
  { key: 1, value: 'price_param' },
  { key: 2, value: 'fixed_param' },
]
export const PAYMENT_CATEGORY_ARRAY = [
  { key: 1, value: 'advance' },
  { key: 2, value: 'settle' },
  { key: 3, value: 'final' },
]
export const PAYMENT_DIRECTION_ARRAY = [
  { key: 1, value: 'disburse' },
  { key: 2, value: 'collection' },
]
export const PAYMENT_ARRAY = [
  { key: 1, value: 'one' },
  { key: 2, value: 'more' },
  { key: 3, value: 'by_order' },
]
export const PAYMENT_NATURE_ARRAY = [
  { key: 1, value: 'payment_in_advance' },
  { key: 2, value: 'settlement_payment' },
]
export const PAYMENT_ORDER_ARRAY = [
  { key: 1, value: 'one' },
  { key: 2, value: 'more' },
  { key: 3, value: 'by_order' },
  { key: 4, value: 'letter_credit' },
]
export const PAYMENT_PLAN_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'unpaid' },
  { key: 3, value: 'paid' },
]
export const PAYMENT_REQUEST_STATUS_ARRAY = [
  { key: 1, value: 'to_be_paid' },
  { key: 2, value: 'payment_in_progress' },
  { key: 3, value: 'payment_completed' },
  { key: 4, value: 'payment_canceled' },
]
export const PAYMENT_REQUEST_TYPE_ARRAY = [
  { key: 2, value: 'order_pay' },
  { key: 3, value: 'processing_pay' },
  { key: 4, value: 'logistics_pay' },
  { key: 7, value: 'shipping_pay' },
  { key: 1, value: 'other_pay' },
  { key: 11, value: 'other_service' },
]
export const PAYMENT_TYPE_ARRAY = [
  { key: 1, value: 'fixed' },
  { key: 2, value: 'percent' },
]
export const POSITION_VISION_ARRAY = [
  { key: 1, value: 'price_vision' },
  { key: 2, value: 'quantity_vision' },
  { key: 3, value: 'match_vision' },
  { key: 4, value: 'none' },
]
export const PRICE_SOURCE_ARRAY = [
  { key: 1, value: 'network' },
  { key: 2, value: 'magazine' },
  { key: 3, value: 'create' },
]
export const PRICING_METHOD_ARRAY = [
  { key: 1, value: 'price_method' },
  { key: 2, value: 'ratio_method' },
]
export const PROBLEM_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'submitted' },
  { key: 3, value: 'in_process' },
  { key: 4, value: 'Processed' },
  { key: 5, value: 'library' },
]
export const PROBLEM_TYPE_ARRAY = [
  { key: 1, value: 'issues' },
  { key: 2, value: 'bug' },
]
export const READ_FREQUENCY_ARRAY = [
  { key: 1, value: 'minute' },
  { key: 2, value: 'hour' },
  { key: 3, value: 'day' },
]
export const REASONABLE_REMINDER_ARRAY = [
  { key: 1, value: 'reasonable' },
  { key: 2, value: 'unreasonable' },
]
export const ROLE_TYPE_ARRAY = [
  { key: 1, value: 'system_role' },
  { key: 2, value: 'business_role' },
  { key: 3, value: 'project_role' },
  { key: 4, value: 'driver' },
]
export const SENDER_OR_ADDRESSEE_ARRAY = [
  { key: 1, value: 'sender' },
  { key: 2, value: 'addressee' },
]
export const SERVICE_STATUS_ARRAY = [
  { key: 1, value: 'to_be_signed' },
  { key: 2, value: 'our_company_has_signed' },
  { key: 13, value: 'the_other_party_has_signed' },
  { key: 3, value: 'double_signed' },
  { key: 5, value: 'our_company_has_signed_agreement' },
  { key: 14, value: 'the_other_party_has_signed_agreement' },
  { key: 6, value: 'side_agreement_double_signed' },
  { key: 11, value: 'canceled' },
]
export const SERVICE_TYPE_ARRAY = [
  { key: 1, value: 'single' },
  { key: 2, value: 'long' },
  { key: 3, value: 'framework' },
]
export const SETTLE_ACCOUNTS_STATUS_ARRAY = [
  { key: 1, value: 'unconfirmed' },
  { key: 2, value: 'confirmed' },
]
export const SETTLEMENT_BASIS_ARRAY = [
  { key: 1, value: 'pound_list' },
  { key: 2, value: 'certificate_transfer' },
  { key: 3, value: 'mates_receipt' },
  { key: 4, value: 'lading_bill' },
  { key: 5, value: 'barge_waybill' },
  { key: 6, value: 'train_waybill' },
  { key: 7, value: 'water_gauge' },
]
export const SETTLEMENT_TYPE_ARRAY = [
  { key: 1, value: 'receivable' },
  { key: 2, value: 'payable' },
]
export const SHIPPING_AGENT_ENTRUST_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'not_recommended' },
  { key: 3, value: 'recommended' },
  { key: 4, value: 'refuse' },
  { key: 5, value: 'take' },
]
export const SHIPPING_BERTHING_PLAN_STATUS_ARRAY = [
  { key: 1, value: 'undetermined' },
  { key: 2, value: 'determined' },
]
export const SHIPPING_DECLARE_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'not_notified' },
  { key: 3, value: 'notified' },
  { key: 4, value: 'refuse' },
  { key: 5, value: 'accept' },
]
export const SHIPPING_METHOD_ARRAY = [
  { key: 1, value: 'bulk' },
  { key: 2, value: 'container' },
  { key: 5, value: 'container_lcl' },
  { key: 4, value: 'bbv' },
  { key: 6, value: 'truch_transportation' },
  { key: 7, value: 'ship_transportation' },
  { key: 8, value: 'train_transportation' },
  { key: 3, value: 'other' },
]
export const SHIPPING_PORT_TYPE_ARRAY = [
  { key: 1, value: 'origin' },
  { key: 2, value: 'destination' },
]
export const SHIPPING_REFERRER_ARRAY = [
  { key: 1, value: 'charterer' },
  { key: 2, value: 'shipowner' },
]
export const TAX_RATE_TYPE_ARRAY = [
  { key: 1, value: 'commodity' },
  { key: 2, value: 'service' },
]
export const TAX_RECEIPT_CATEGORY_ARRAY = [
  { key: 1, value: 'invoicing' },
  { key: 2, value: 'receipt' },
]
export const TAX_RECEIPT_TYPE_ARRAY = [
  { key: 1, value: 'paper' },
  { key: 2, value: 'electronic' },
  { key: 3, value: 'full_electric' },
]
export const TERMS_SCOPE_ARRAY = [
  { key: 1, value: 'sales_contracts' },
  { key: 2, value: 'purchase_contracts' },
  { key: 3, value: 'processing_entrust' },
  { key: 4, value: 'logistics_entrust' },
  { key: 9, value: 'shipping_entrust' },
  { key: 13, value: 'inner_contracts' },
  { key: 14, value: 'other_service' },
]
export const TEXT_ALIGN_ARRAY = [
  { key: 1, value: 'left' },
  { key: 2, value: 'center' },
  { key: 3, value: 'right' },
]
export const TRADE_DIRECTION_ARRAY = [
  { key: 1, value: 'purchase' },
  { key: 2, value: 'sale' },
  { key: 3, value: 'internal' },
  { key: 4, value: 'external' },
]
export const TRADE_TYPE_ARRAY = [
  { key: 1, value: 'processing' },
  { key: 2, value: 'logistics' },
  { key: 3, value: 'test' },
  { key: 4, value: 'warehouse' },
  { key: 5, value: 'declare' },
  { key: 6, value: 'un_loading' },
  { key: 7, value: 'agent' },
  { key: 8, value: 'shipping' },
  { key: 9, value: 'insurance' },
  { key: 10, value: 'transfer_cargo_right' },
]
export const TRANSACTION_CATEGORY_ARRAY = [
  { key: 1, value: 'opportunity' },
  { key: 2, value: 'actual' },
  { key: 3, value: 'hypothetical' },
]
export const TRANSACTION_TYPE_ARRAY = [
  { key: 1, value: 'import' },
  { key: 2, value: 'export' },
  { key: 3, value: 'domestic' },
  { key: 4, value: 'offshore' },
]
export const TRANSFER_CARGO_RIGHT_TYPE_ARRAY = [
  { key: 1, value: 'into' },
  { key: 2, value: 'out' },
  { key: 3, value: 'inner_circulation' },
]
export const UNDER_LINE_SCOPE_ARRAY = [
  { key: 1, value: 'all' },
  { key: 2, value: 'value' },
]
export const USER_TO_DO_LIST_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'unexecuted' },
  { key: 3, value: 'executing' },
  { key: 4, value: 'completed' },
]
export const VARIATE_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'submitted' },
  { key: 3, value: 'in_process' },
  { key: 4, value: 'Processed' },
  { key: 5, value: 'library' },
  { key: 6, value: 'turn' },
]
export const VEHICLE_ARRAY = [
  { key: 1, value: 'truck' },
  { key: 2, value: 'train' },
  { key: 3, value: 'cargo_ship' },
]
export const VEHICLE_TYPE_ARRAY = [
  { key: 1, value: 'truck' },
  { key: 2, value: 'train' },
  { key: 3, value: 'cargo_ship' },
]
export const VERTICAL_ALIGN_ARRAY = [
  { key: 1, value: 'top' },
  { key: 2, value: 'middle' },
  { key: 3, value: 'bottom' },
]
export const VISIBILITY_ARRAY = [
  { key: 1, value: 'owner' },
  { key: 2, value: 'all' },
]
export const WAREHOUSE_TYPE_ARRAY = [
  { key: 1, value: 'in_port' },
  { key: 2, value: 'out_port' },
  { key: 3, value: 'factory_material' },
  { key: 4, value: 'other_warehouse' },
]
export const YES_NO_ARRAY = [
  { key: 1, value: 'yes' },
  { key: 2, value: 'no' },
]
export const TRANSPORT_METHOD_ARRAY = [
  { key: 1, value: 'truck_transportation' },
  { key: 2, value: 'train_transportation' },
  { key: 3, value: 'barge_transportation' },
  { key: 4, value: 'freight_transfer' },
  { key: 5, value: 'loading_and_unloading' },
  { key: 6, value: 'other' },
]
export const STORAGE_ORIGIN_ARRAY = [
  { key: 1, value: 'origin_order' },
  { key: 2, value: 'order_delivery' },
  { key: 3, value: 'quantity_adjustment' },
  { key: 4, value: 'send_back' },
  { key: 5, value: 'allocation' },
  { key: 6, value: 'buy_back' },
  { key: 7, value: 'wating_buy_back' },
  { key: 8, value: 'method_processing' },
  { key: 18, value: 'production_process' },
  { key: 9, value: 'inner_turn' },
  { key: 10, value: 'borrow_cargo' },
  { key: 11, value: 'return_cargo' },
  { key: 12, value: 'difference' },
  { key: 13, value: 'loss' },
  { key: 14, value: 'inventory_surplus' },
  { key: 15, value: 'inventory_loss' },
  { key: 16, value: 'footing_material' },
  { key: 17, value: 'other' },
  { key: 19, value: 'production_report' },
  { key: 20, value: 'inventory_reversal' },
]
export const STORAGE_OUTPUT_ARRAY = [
  { key: 1, value: 'output_order' },
  { key: 2, value: 'output_warehouse' },
  { key: 3, value: 'borrow_cargo' },
  { key: 4, value: 'return_cargo' },
  { key: 5, value: 'other' },
]
export const WAREHOUSE_NATURE_ARRAY = [
  { key: 1, value: 'real_warehouse' },
  { key: 2, value: 'car_transit_warehouse' },
  { key: 3, value: 'train_transit_warehouse' },
  { key: 4, value: 'barge_transit_warehouse' },
  { key: 5, value: 'shipping_transit_warehouse' },
  { key: 6, value: 'profit_loss_warehouse' },
  { key: 7, value: 'purchase_external_warehouse' },
  { key: 8, value: 'sale_external_warehouse' },
  { key: 9, value: 'other_warehouse' },
  { key: 10, value: 'borrowed_warehouse' },
  { key: 11, value: 'field_stack_warehouse' },
]
export const PRICE_TYPE_ARRAY = [
  { key: 1, value: 'regular_price' },
  { key: 2, value: 'uncertain_price' },
]
export const BUY_BACK_ARRAY = [
  { key: 1, value: 'not_suitable' },
  { key: 2, value: 'waiting_to_buy_back' },
  { key: 3, value: 'buy_back' },
]
export const APPROVAL_TYPE_ARRAY = [
  { key: 6, value: 'custom' },
  { key: 1, value: 'contract' },
  { key: 14, value: 'logistics_approval' },
  { key: 15, value: 'processing_approval' },
  { key: 18, value: 'shipping_approval' },
  { key: 19, value: 'opportunity_commodity_approval' },
  { key: 20, value: 'opportunity_logistics_approval' },
  { key: 21, value: 'opportunity_shipping_approval' },
  { key: 23, value: 'opportunity_processing_approval' },
  { key: 28, value: 'settle_accounts_service_approval' },
  { key: 29, value: 'settle_accounts_order_approval' },
  { key: 35, value: 'storage_record_approval' },
  { key: 36, value: 'pre_outbound_approval' },
  { key: 38, value: 'order_delivery_completed_approval' },
  { key: 39, value: 'processing_plant_yield_approval' },
  { key: 40, value: 'logistics_departure_review' },
  { key: 41, value: 'logistics_arrival_review' },
  { key: 42, value: 'logistics_departure_rollback_approval' },
  { key: 43, value: 'logistics_arrival_rollback_approval' },
  { key: 44, value: 'storage_record_approval_rollback' },
  { key: 45, value: 'opportunity_other_approval' },
  { key: 46, value: 'service_other_approval' },
  { key: 47, value: 'production_process_approval' },
  { key: 48, value: 'settle_accounts_order_roll_back' },
  { key: 49, value: 'settle_accounts_service_roll_back' },
  { key: 50, value: 'ship_load_board_approval' },
  { key: 51, value: 'ship_load_board_rollback' },
  { key: 52, value: 'order_delivery_completed_approval_rollback' },
  { key: 53, value: 'logistics_delivery_completed_approval' },
  { key: 54, value: 'logistics_delivery_completed_approval_rollback' },
  { key: 55, value: 'shipping_delivery_completed_approval' },
  { key: 56, value: 'shipping_delivery_completed_approval_rollback' },
  { key: 57, value: 'processing_delivery_completed_approval' },
  { key: 58, value: 'processing_delivery_completed_approval_rollback' },
  { key: 59, value: 'order_settle_completed_approval' },
  { key: 60, value: 'order_settle_completed_approval_rollback' },
  { key: 61, value: 'logistics_settle_completed_approval' },
  { key: 62, value: 'logistics_settle_completed_approval_rollback' },
  { key: 63, value: 'processing_settle_completed_approval' },
  { key: 64, value: 'processing_settle_completed_approval_rollback' },
  { key: 65, value: 'shipping_settle_completed_approval' },
  { key: 66, value: 'shipping_settle_completed_approval_rollback' },
  { key: 67, value: 'other_settle_completed_approval' },
  { key: 68, value: 'other_settle_completed_approval_rollback' },
  { key: 69, value: 'order_close_approval' },
  { key: 70, value: 'order_close_approval_rollback' },
  { key: 71, value: 'logistics_close_approval' },
  { key: 72, value: 'logistics_close_approval_rollback' },
  { key: 73, value: 'processing_close_approval' },
  { key: 74, value: 'processing_close_approval_rollback' },
  { key: 75, value: 'shipping_close_approval' },
  { key: 76, value: 'shipping_close_approval_rollback' },
  { key: 77, value: 'other_close_approval' },
  { key: 78, value: 'other_close_approval_rollback' },
  { key: 79, value: 'order_cancel_approval' },
  { key: 80, value: 'opportunity_commodity_update_approval' },
  { key: 81, value: 'transfer_cargo_right_approval_rollback' },
  { key: 82, value: 'production_report_approval' },
  { key: 83, value: 'production_report_approval_rollback' },
  { key: 84, value: 'production_adjustment_approval' },
  { key: 85, value: 'production_adjustment_approval_rollback' },
  { key: 86, value: 'material_storage_adjustment_approval' },
  { key: 87, value: 'material_storage_adjustment_approval_rollback' },
  { key: 88, value: 'material_loan_approval' },
  { key: 89, value: 'material_loan_loan_completed_approval' },
  { key: 90, value: 'material_loan_return_completed_approval' },
  { key: 91, value: 'material_loan_loan_completed_approval_rollback' },
  { key: 92, value: 'material_loan_return_completed_approval_rollback' },
]
export const BUDGET_OR_PROJECT_ARRAY = [
  { key: 1, value: 'budget_type' },
  { key: 2, value: 'project_type' },
]
export const CONNECTION_TRADE_TYPE_ARRAY = [
  { key: 1, value: 'budget' },
  { key: 2, value: 'order' },
  { key: 3, value: 'service' },
]
export const DATA_GENERATION_METHOD_ARRAY = [
  { key: 1, value: 'manual_input' },
  { key: 2, value: 'automatic_generation' },
  { key: 3, value: 'logistics_departure_generation' },
  { key: 4, value: 'logistics_arrival_generation' },
  { key: 5, value: 'order_generation' },
  { key: 6, value: 'quantity_adjustment' },
  { key: 7, value: 'production_process' },
  { key: 8, value: 'method_processing' },
  { key: 9, value: 'ship_load_board' },
  { key: 10, value: 'freight_transfer' },
  { key: 11, value: 'production_report' },
  { key: 12, value: 'production_adjustment' },
  { key: 13, value: 'material_adjustment' },
]
export const END_CLOSING_STATUS_ARRAY = [
  { key: 1, value: 'normal' },
  { key: 2, value: 'fallback' },
]
export const HEADER_PAPER_TYPE_ARRAY = [
  { key: 1, value: 'blank' },
  { key: 2, value: 'shipping_advice' },
  { key: 3, value: 'beneficiary_certificate' },
  { key: 4, value: 'coa' },
  { key: 5, value: 'certificate_origin' },
]
export const JOURNAL_CHECK_STATUS_ARRAY = [
  { key: 1, value: 'uncheck' },
  { key: 2, value: 'checked' },
]
export const OPTION_SHIPPING_ARRAY = [
  { key: 1, value: 'charter_option' },
  { key: 2, value: 'owner_option' },
]
export const ORDER_DOCUMENT_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'confirmed' },
]
export const ORDER_DOCUMENT_TYPE_ARRAY = [
  { key: 1, value: 'header_paper' },
  { key: 2, value: 'shipping_advice' },
  { key: 3, value: 'beneficiary_certificate' },
  { key: 4, value: 'coa' },
  { key: 5, value: 'certificate_origin' },
  { key: 6, value: 'packing_list' },
  { key: 7, value: 'bill_lading' },
  { key: 8, value: 'co' },
  { key: 9, value: 'invoice' },
  { key: 10, value: 'custom_declaration' },
]
export const ORDER_HEADER_PAPER_CONTENT_ARRAY = [
  { key: 1, value: 'text' },
  { key: 2, value: 'table' },
  { key: 3, value: 'title' },
  { key: 4, value: 'subtitle' },
]
export const REMITTANCE_TYPE_ARRAY = [
  { key: 1, value: 'domestic_remittance' },
  { key: 2, value: 'overseas_remittance' },
  { key: 3, value: 'cross_border_remittance' },
]
export const TIME_ZONE_ARRAY = [
  { key: 1, value: 'Asia_Shanghai' },
  { key: 2, value: 'America_Los_Angeles' },
  { key: 3, value: 'America_New_York' },
  { key: 4, value: 'Australia_Darwin' },
  { key: 5, value: 'Australia_Sydney' },
  { key: 6, value: 'America_Argentina_Buenos_Aires' },
  { key: 7, value: 'Africa_Cairo' },
  { key: 8, value: 'America_Anchorage' },
  { key: 9, value: 'America_Sao_Paulo' },
  { key: 10, value: 'Asia_Dhaka' },
  { key: 11, value: 'Africa_Harare' },
  { key: 12, value: 'America_St_Johns' },
  { key: 13, value: 'America_Chicago' },
  { key: 14, value: 'Africa_Addis_Ababa' },
  { key: 15, value: 'Europe_Paris' },
  { key: 16, value: 'America_Indiana_Indianapolis' },
  { key: 17, value: 'Asia_Kolkata' },
  { key: 18, value: 'Asia_Tokyo' },
  { key: 19, value: 'Pacific_Apia' },
  { key: 20, value: 'Asia_Yerevan' },
  { key: 21, value: 'Pacific_Auckland' },
  { key: 22, value: 'Asia_Karachi' },
  { key: 23, value: 'America_Phoenix' },
  { key: 24, value: 'America_Puerto_Rico' },
  { key: 25, value: 'Pacific_Guadalcanal' },
  { key: 26, value: 'Asia_Ho_Chi_Minh' },
  { key: 27, value: 'America_Denver' },
  { key: 28, value: 'Pacific_Honolulu' },
]
export const TRANSACTION_CATEGORY_SERVICE_ARRAY = [
  { key: 1, value: 'opportunity_service' },
  { key: 2, value: 'actual_service' },
  { key: 3, value: 'hypothetical_service' },
]
export const DEPARTMENT_LABEL_ARRAY = [
  { key: 1, value: 'business_department' },
  { key: 2, value: 'executor_department' },
  { key: 3, value: 'logistics_department' },
  { key: 4, value: 'market_department' },
  { key: 5, value: 'finance_department' },
  { key: 6, value: 'risk_department' },
  { key: 7, value: 'it_department' },
]
export const STORAGE_APPROVAL_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'approval_confirmed' },
  { key: 7, value: 'in_pre_outbound' },
  { key: 8, value: 'pre_outbound' },
  { key: 3, value: 'in_storage_approval' },
  { key: 4, value: 'approval_refuse' },
  { key: 5, value: 'pass' },
  { key: 6, value: 'in_rollback' },
]
export const CARGO_STATUS_ARRAY = [
  { key: 1, value: 'disputed_of_sale_delivered' },
  { key: 2, value: 'disputed_of_procurement_delivered' },
  { key: 3, value: 'clue_or_offer_expired' },
  { key: 4, value: 'expired' },
  { key: 5, value: 'none' },
  { key: 6, value: 'clue' },
  { key: 7, value: 'offer' },
  { key: 8, value: 'purchase_order_shipped' },
  { key: 9, value: 'in_transit' },
  { key: 10, value: 'in_physical_warehouse' },
  { key: 11, value: 'sale_delivered' },
  { key: 12, value: 'closing_cargo' },
]
export const ORDER_QUANTITY_CONFIRM_TYPE_ARRAY = [
  { key: 1, value: 'tolerance_range' },
  { key: 2, value: 'quantity_range' },
]
export const COMPANY_FORM_ARRAY = [
  { key: 1, value: 'customer' },
  { key: 2, value: 'supplier' },
  { key: 3, value: 'server' },
  { key: 4, value: 'finance' },
  { key: 5, value: 'source_factory' },
]
export const SERVER_TYPE_ARRAY = [
  { key: 1, value: 'processing' },
  { key: 2, value: 'logistics' },
  { key: 3, value: 'test' },
  { key: 4, value: 'agent' },
  { key: 5, value: 'shipping' },
  { key: 6, value: 'insurance' },
  { key: 7, value: 'bank' },
  { key: 8, value: 'sales' },
  { key: 9, value: 'shippingAgent' },
  { key: 10, value: 'other_service' },
  { key: 11, value: 'order' },
]
export const CLOSE_STATUS_ARRAY = [
  { key: 1, value: 'unclosed' },
  { key: 3, value: 'closing' },
  { key: 2, value: 'closed' },
  { key: 4, value: 'unclosing' },
]
export const SETTLEMENT_STATUS_ARRAY = [
  { key: 1, value: 'settlement_unsettled' },
  { key: 2, value: 'settlement' },
  { key: 4, value: 'settlement_completed_approval' },
  { key: 3, value: 'settlement_completed' },
  { key: 5, value: 'settlement_completed_rollback' },
]
export const DELIVERY_STATUS_ARRAY = [
  { key: 1, value: 'to_be_delivered' },
  { key: 2, value: 'delivery' },
  { key: 3, value: 'delivery_completed_confirm' },
  { key: 4, value: 'delivery_completed' },
  { key: 5, value: 'delivery_completed_rollback' },
]
export const INVOICE_TYPE_ARRAY = [
  { key: 1, value: 'tax_ordinary_invoice' },
  { key: 3, value: 'vat_invoice' },
  { key: 6, value: 'debit_note' },
  { key: 9, value: 'invoice' },
  { key: 10, value: 'pre_invoice' },
  { key: 2, value: 'proforma_invoice' },
  { key: 4, value: 'statement_of_account' },
  { key: 5, value: 'receipt_bill' },
  { key: 7, value: 'tax_tariff' },
  { key: 8, value: 'value_added_tax' },
]
export const SERVICE_INVOICE_TYPE_ENUM = [
  { key: 1, value: 'tax_ordinary_invoice' },
  { key: 3, value: 'vat_invoice' },
  { key: 6, value: 'debit_note' },
  { key: 9, value: 'invoice' },
  { key: 10, value: 'pre_invoice' },
  { key: 2, value: 'proforma_invoice' },
  { key: 7, value: 'tax_tariff' },
  { key: 8, value: 'value_added_tax' },
]
export const WRITE_OFF_STATUS_ARRAY = [
  { key: 4, value: 'empty_null' },
  { key: 1, value: 'payment_not_yet_verified' },
  { key: 2, value: 'verification_approval_in_progress' },
  { key: 3, value: 'payment_has_been_verified' },
]
export const SETTLE_ACCOUNTS_APPROVAL_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'pending' },
  { key: 3, value: 'in' },
  { key: 4, value: 'approval_refuse' },
  { key: 5, value: 'pass' },
  { key: 6, value: 'settle_in_rollback' },
]
export const SHIP_LOAD_BOARD_APPROVAL_STATUS_ENUM = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'confirmed' },
  { key: 3, value: 'under_review' },
  { key: 4, value: 'not_pass' },
  { key: 5, value: 'pass' },
  { key: 6, value: 'checked_rollback' },
]
export const FREE_PORT_TYPE_ARRAY = [
  { key: 1, value: 'mixed_use' },
  { key: 2, value: 'separate' },
]
export const INCLUDING_DESTINATION_CHARGES_ARRAY = [
  { key: 1, value: 'charges_empty' },
  { key: 2, value: 'charges_lsl' },
  { key: 3, value: 'charges_cic' },
]
export const GENERAL_DANGEROUS_ARRAY = [
  { key: 1, value: 'general_cargo' },
  { key: 2, value: 'dangerous' },
]
export const SHIPPING_CUPBOARD_ARRAY = [
  { key: 1, value: 'large_cabinet' },
  { key: 2, value: 'small_cabinet' },
  { key: 3, value: 'nor' },
]
export const SHIPPING_SHIP_ARRAY = [
  { key: 1, value: 'handy' },
  { key: 2, value: 'supra' },
  { key: 3, value: 'ultra' },
  { key: 4, value: 'panamax' },
  { key: 5, value: 'kamsarmax' },
]
export const SHIPPING_PRICE_TYPE_ARRAY = [
  { key: 1, value: 'fio' },
  { key: 2, value: 'filo' },
  { key: 3, value: 'fiost' },
]
export const DOCUMENT_STATUS_ARRAY = [
  { key: 1, value: 'file_unclose' },
  { key: 2, value: 'file_close_approval' },
  { key: 3, value: 'file_close' },
  { key: 4, value: 'file_close_rollback' },
]
export const CONTAINER_TYPE_ARRAY = [
  { key: 1, value: 'large_cabinet' },
  { key: 2, value: 'small_cabinet' },
  { key: 3, value: 'nor' },
  { key: 4, value: 'handy' },
  { key: 5, value: 'supra' },
  { key: 6, value: 'ultra' },
  { key: 7, value: 'panamax' },
  { key: 8, value: 'kamsarmax' },
  { key: 9, value: 'fio' },
  { key: 10, value: 'filo' },
  { key: 11, value: 'fiost' },
]
export const UNIT_ARRAY = [
  { key: 1, value: 'ton' },
  { key: 2, value: 'container' },
]
export const FILE_TAG_TYPE_ARRAY = [{ key: 1, value: 'settle_account' }]
export const FILE_CHECK_STATUS_ARRAY = [
  { key: 1, value: 'file_not_checked' },
  { key: 2, value: 'file_qualified' },
  { key: 3, value: 'file_lack' },
  { key: 4, value: 'file_not_qualified' },
  { key: 5, value: 'file_repair' },
]
export const TRANSFER_APPROVAL_STATUS_ARRAY = [
  { key: 1, value: 'draft' },
  { key: 2, value: 'pending' },
  { key: 3, value: 'in' },
  { key: 4, value: 'approval_refuse' },
  { key: 5, value: 'pass' },
  { key: 6, value: 'transfer_in_rollback' },
]
export const CARGO_ORIGIN_TYPE_ARRAY = [
  { key: 1, value: 'delivery' },
  { key: 2, value: 'allocation' },
  { key: 3, value: 'adjustment' },
]
export const ORDER_LOGISTICS_INSTRUCTION_STATUS_ARRAY = [
  { key: 1, value: 'none' },
  { key: 2, value: 'drafts' },
  { key: 3, value: 'active_all' },
  { key: 4, value: 'accept_all' },
  { key: 5, value: 'executing' },
  { key: 6, value: 'completed' },
]
export const EX_FACTORY_SETTLEMENT = [
  { key: 1, value: 'factory_settlement' },
  { key: 2, value: 'ex_factory_settlement' },
]
export const ACCOUNTING_STATUS_ARRAY = [
  { key: 1, value: 'accounting_unbooked' },
  { key: 2, value: 'accounting_booked' },
  { key: 3, value: 'accounting_withdraw' },
]
export const MATERIAL_LOAN_ARRAY = [
  { key: 2, value: 'loan_borrow' },
  { key: 3, value: 'loan_loan' },
]
export const MATERIAL_LOAN_STATUS_ARRAY = [
  { key: 1, value: 'to_be_signed' },
  { key: 2, value: 'our_company_has_signed' },
  { key: 13, value: 'the_other_party_has_signed' },
  { key: 3, value: 'double_signed' },
  { key: 15, value: 'convert_to_order' },
]
export const MATERIAL_LOAN_SCENE_ARRAY = [
  { key: 1, value: 'substitution_protocol' },
  { key: 2, value: 'port_agent_loan_goods' },
  { key: 3, value: 'total_cargo_loan' },
]
export const SETTLE_BASIS_STATUS_ARRAY = [
  { key: 1, value: 'settle_basis_unsettled' },
  { key: 2, value: 'settle_basis_settling' },
  { key: 3, value: 'settle_basis_final' },
]
export const SETTLEMENT_ITEM_SCENE_ARRAY = [
  { key: 1, value: 'settlement_item_scene_order' },
  { key: 2, value: 'settlement_item_scene_processing' },
  { key: 4, value: 'settlement_item_scene_logistics' },
  { key: 5, value: 'settlement_item_scene_shipping' },
  { key: 16, value: 'settlement_item_scene_other' },
]
export const SETTLEMENT_CATEGORY_ARRAY = [
  { key: 1, value: 'settlement_provisional' },
  { key: 2, value: 'settlement_final' },
]
export const SETTLEMENT_CATEGORY_ARRAY2 = [
  { key: 2, value: 'settlement_provisional' },
  { key: 1, value: 'settlement_final' },
]
export const SETTLE_ACCOUNTS_CATEGORY_ARRAY = [
  { key: 1, value: 'main_settlement' },
  { key: 2, value: 'other_settlement' },
  { key: 3, value: 'main_settlement_adjust' },
  { key: 4, value: 'other_settlement_adjust' },
  { key: 5, value: 'main_settlement_adjust_final' },
  { key: 6, value: 'other_settlement_adjust_final' },
]
export const SETTLE_ADJUST_TYPE_ARRAY = [
  { key: 1, value: 'increase' },
  { key: 2, value: 'reduce' },
]
export const LOGISTICS_SETTLEMENT_BASIS_ARRAY = [
  { key: 1, value: 'logistics_basis_departure' },
  { key: 2, value: 'logistics_basis_arrive' },
]
export const SETTLEMENT_ADJUST_TYPE_ARRAY = [
  { key: 1, value: 'adjust_quantity' },
  { key: 2, value: 'adjust_price' },
  { key: 3, value: 'adjust_amount' },
  { key: 4, value: 'adjust_tax_amount' },
]
