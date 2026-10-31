export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type PlanType = "free" | "pro";
export type KnowledgeSourceType = "text" | "pdf" | "md" | "txt";
export type KnowledgeSourceStatus = "uploading" | "processing" | "ready" | "failed";
export type MessageRole = "visitor" | "bot";

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          clerk_user_id: string;
          plan: PlanType;
          created_at: string;
        };
        Insert: {
          clerk_user_id: string;
          plan?: PlanType;
          created_at?: string;
        };
        Update: {
          clerk_user_id?: string;
          plan?: PlanType;
          created_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          public_key: string;
          messages_used: number;
          period_start: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name: string;
          public_key: string;
          messages_used?: number;
          period_start?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          owner_id?: string;
          name?: string;
          public_key?: string;
          messages_used?: number;
          period_start?: string;
          created_at?: string;
        };
      };
      widget_configs: {
        Row: {
          project_id: string;
          button_color: string;
          position: string;
          label: string;
          animation: string;
          header_text: string;
          show_badge: boolean;
        };
        Insert: {
          project_id: string;
          button_color?: string;
          position?: string;
          label?: string;
          animation?: string;
          header_text?: string;
          show_badge?: boolean;
        };
        Update: {
          project_id?: string;
          button_color?: string;
          position?: string;
          label?: string;
          animation?: string;
          header_text?: string;
          show_badge?: boolean;
        };
      };
      knowledge_sources: {
        Row: {
          id: string;
          project_id: string;
          title: string;
          type: KnowledgeSourceType;
          storage_key: string | null;
          status: KnowledgeSourceStatus;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          title: string;
          type: KnowledgeSourceType;
          storage_key?: string | null;
          status?: KnowledgeSourceStatus;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          title?: string;
          type?: KnowledgeSourceType;
          storage_key?: string | null;
          status?: KnowledgeSourceStatus;
          created_at?: string;
        };
      };
      knowledge_chunks: {
        Row: {
          id: string;
          project_id: string;
          source_id: string;
          content: string;
          embedding: string | null;
        };
        Insert: {
          id?: string;
          project_id: string;
          source_id: string;
          content: string;
          embedding?: string | null;
        };
        Update: {
          id?: string;
          project_id?: string;
          source_id?: string;
          content?: string;
          embedding?: string | null;
        };
      };
      conversations: {
        Row: {
          id: string;
          project_id: string;
          visitor_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          visitor_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          visitor_id?: string;
          created_at?: string;
        };
      };
      messages: {
        Row: {
          id: string;
          conversation_id: string;
          role: MessageRole;
          body: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          role: MessageRole;
          body: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          role?: MessageRole;
          body?: string;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      consume_message: {
        Args: { p_project_id: string };
        Returns: boolean;
      };
      match_chunks: {
        Args: {
          p_project_id: string;
          p_embedding: string;
          p_match_count: number;
        };
        Returns: {
          id: string;
          content: string;
          similarity: number;
        }[];
      };
    };
  };
}
