export interface TaskData {
  id: number
  description : string
  priority: 'low' | 'medium' | 'high'
  status: 'backlog' | 'to do' | 'in progress' | 'staging' | 'completed' | 'cancelled'
  dueDate: string
}
